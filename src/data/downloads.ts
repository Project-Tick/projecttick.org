export const PLATFORMS = [
	{
		name: "Windows",
		path: "/download/windows",
		key: "windows",
		icon: "simple-icons:windows10",
	},
	{
		name: "macOS",
		path: "/download/macos",
		key: "macos",
		icon: "simple-icons:apple",
	},
	{
		name: "Linux",
		path: "/download/linux",
		key: "linux",
		icon: "simple-icons:linux",
	},
	{
		name: "All Builds",
		path: "/download/builds",
		key: "builds",
		icon: "lucide:package",
	},
] as const;

export const DOWNLOADS = {
	windows: [
		{
			title: "Stable WIN32",
			downloads: [
				{
					title: "Installer - Windows 7 and later",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-win32-5.15.2-Setup.exe`,
					type: "primary" as const,
					icon: "simple-icons:windows10",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Archive - Windows 7 and later",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-win32-5.15.2.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows10",
					secondaryIcon: "lucide:download",
				},

				{
					title: "Archive - Windows XP and Vista",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-win32-5.15.2.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windowsxp",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],
	linux: [
		{
			title: "Packages",
			downloads: [
				{
					title: "Flatpak Wrapper Package",
					href: "https://flathub.org/apps/details/org.projecttick.MeshMC",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
				{
					title: "Debian Wrapper Package",
					href: `https://github.com/Project-Tick/Packaging/releases/download/2.0/meshmc_2.0-1.deb`,
					type: "secondary" as const,
					icon: "simple-icons:debian",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Fedora/RHEL Wrapper Package",
					href: `https://github.com/Project-Tick/Packaging/releases/download/2.0/MeshMC-2.0-1.noarch.rpm`,
					type: "secondary" as const,
					icon: "simple-icons:fedora",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Arch Linux (AUR) Wrapper Package",
					href: `https://aur.archlinux.org/packages/meshmc`,
					type: "secondary" as const,
					icon: "simple-icons:archlinux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Binary Tarball (32-bit)",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-lin32.tar.gz`,
					type: "secondary" as const,
					icon: "lucide:package",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Binary Tarball (64-bit)",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-lin64.tar.gz`,
					type: "secondary" as const,
					icon: "lucide:package",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],
	macos: [
		{
			title: "macOS High Sierra or later",
			downloads: [
				{
					title: "64-bit Archive",
					href: `https://github.com/Project-Tick/MeshMC/releases/download/stable/MeshMC-stable-osx64-5.15.2.tar.gz`,
					type: "primary" as const,
					icon: "simple-icons:apple",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],
};
