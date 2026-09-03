import type { APIRoute } from "astro";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { getCollection } from "astro:content";
import { Feed } from "feed";

const DEFAULT_URL = new URL("https://projecttick.org");

// The MeshMC updater only reads `projt:` elements that live in this exact
// namespace (see UpdateChecker::isSupportedFeedNamespace). Any other URI makes
// it silently ignore every element of the product feed.
const PRODUCT_FEED_NAMESPACE = "https://projecttick.org/ns/product-feed";
const PRODUCT_FEED_VERSION = "1";
const PRODUCT_NAME = "MeshMC";

const RSS_ROOT_TAG = '<rss version="2.0"';

/**
 * Declares the `projt:` prefix on the RSS root element.
 *
 * The `feed` package renders custom elements but never their namespace
 * declaration, and an undeclared prefix makes the document fail
 * namespace-aware parsing outright — which is exactly how the updater reads
 * it. Throwing here fails the build instead of shipping such a feed.
 */
const withProductNamespace = (rss: string): string => {
	if (!rss.includes(RSS_ROOT_TAG)) {
		throw new Error(
			"unexpected <rss> root element: cannot declare the projt: namespace",
		);
	}

	return rss.replace(
		RSS_ROOT_TAG,
		`${RSS_ROOT_TAG} xmlns:projt="${PRODUCT_FEED_NAMESPACE}"`,
	);
};

const processor = remark()
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

export const GET: APIRoute = async ({
	site = DEFAULT_URL,
	url,
	params: { feedName },
}) => {
	if (feedName !== "feed" && feedName !== "short") {
		return new Response(null, {
			status: 404,
		});
	}

	// `feed.xml` doubles as the product feed the launcher polls: the updater
	// and the news checker both walk `<item>` elements, so it is served as
	// RSS 2.0. `short.xml` stays a plain summary-only Atom feed.
	const isProductFeed = feedName === "feed";

	const feed = new Feed({
		title: "MeshMC",
		description:
			"An Open Source Minecraft launcher with the ability to manage multiple instances, accounts and mods. Focused on user freedom and free redistributability.",
		id: site.toString(),
		// RSS 2.0 requires a channel <link>; without it the `feed` package
		// renders the string "undefined" there.
		link: site.toString(),
		feed: url.toString(),
		copyright: "AGPL-3.0",
		language: "en",
		image: `${site.toString()}/img/favicon.png`,
	});

	if (isProductFeed) {
		feed.addExtension({
			name: "projt:feedVersion",
			objects: { _text: PRODUCT_FEED_VERSION },
		});
		feed.addExtension({
			name: "projt:product",
			objects: { _text: PRODUCT_NAME },
		});
	}

	const posts = await getCollection("news", ({ data }) => !data.draft).then(
		(posts) =>
			posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()),
	);

	for (const post of posts) {
		const slug = post.data.slug || post.slug;
		const link = new URL(`/news/${slug}`, site).toString();

		// TODO: use Astro's .render() in the future
		const content = String(await processor.process(post.body))
			.replace(/href="\/([^"]*)"/g, `href="${site}$1"`)
			.replace(/src="\/([^"]*)"/g, `src="${site}$1"`)
			.replace(/href="#([^"]+)"/g, `href="${link}/#$1"`);

		// A release post carries the data the updater decides on. Posts
		// without a version are news only and stay free of `projt:` elements,
		// which the updater skips.
		const releaseVersion = post.data.release_version;
		const productElements =
			isProductFeed && releaseVersion
				? [
						{
							name: "projt:version",
							objects: { _text: releaseVersion },
						},
						{
							name: "projt:channel",
							objects: { _text: post.data.channel },
						},
						{
							name: "projt:notes_format",
							objects: { _text: "html" },
						},
						{
							name: "projt:release_page",
							objects: { _text: link },
						},
					]
				: undefined;

		feed.addItem({
			title: post.data.title,
			// No explicit `id`: it makes the RSS `<guid>` the post URL as a
			// permalink, while Atom keeps falling back to the same link.
			link,
			date: post.data.date,
			// The updater takes its release notes from `<description>`, so the
			// product feed carries the rendered post there instead of the
			// one-line summary.
			description: isProductFeed ? content : post.data.description,
			author: [
				{
					name: "Project Tick",
				},
			],
			extensions: productElements,
		});
	}

	if (isProductFeed) {
		return new Response(withProductNamespace(feed.rss2()), {
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		});
	}

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};

export const getStaticPaths = () => {
	return [{ params: { feedName: "feed" } }, { params: { feedName: "short" } }];
};
