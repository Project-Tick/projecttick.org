---
layout: ../../layouts/DownloadLayout.astro
title: Linux Download
platform: linux
description: Download MeshMC for Linux
screenshotLight: /img/screenshots/landing/linux_light.png
screenshotDark: /img/screenshots/landing/linux_dark.png
screenshotAlt: MeshMC screenshot on Linux showing off various different modpacks and instances
---

## Official Packages

### Flathub

[Flathub](https://flathub.org/) is our primary method of distribution on Linux.

#### App Center

It may already be setup on your system, but if not, see how to enable it for your distribution [here](https://flathub.org/setup).
After setup, MeshMC should now be available in your app center (i.e., GNOME Software, Discover)

#### CLI

You can also enable Flathub and install the launcher with the following commands:

```bash
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.projecttick.MeshMC
```
