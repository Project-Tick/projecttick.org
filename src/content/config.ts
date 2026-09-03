import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	news: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string().min(1, "title is required"),
			description: z.string().min(1, "description is required"),
			date: z.date(),
			slug: z.string().optional(),
			release_version: z.string().optional(),
			// Release channel advertised in the product feed. The MeshMC
			// updater refuses any channel it does not know, so this is
			// deliberately a closed set.
			channel: z.enum(["stable", "beta"]).default("stable"),
			minimum_macos_version: z.string().optional(),
			macos_file_extension: z.string().optional(),
			macos_signature: z.string().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),
			draft: z.boolean().default(false),
		}),
	}),
};
