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

### AppImage

AppImages allow you to take a single file and run MeshMC anywhere. AppImage builds only support x86_64 and ARM64.

#### With Gear Lever (Recommended)

Download [Gear Lever](https://flathub.org/en/apps/it.mijorus.gearlever) from flathub. Once installed, you will be prompted to integrate the launcher's AppImage with your desktop when you open it for the first time.

#### Making the AppImage Executable

After downloading the AppImage, open your file manager and make it [executable](https://docs.appimage.org/introduction/quickstart.html#using-the-gui). You should now be able to run it with a click!

#### CLI

on x86-64:

```bash
curl -LO https://github.com/Project-Tick/MeshMC/releases/download/10.0.0/MeshMC-Linux-x86_64.AppImage
chmod +x ./MeshMC-Linux-x86_64.AppImage
./MeshMC-Linux-x86_64.AppImage
```

on ARM64:

```bash
curl -LO https://github.com/Project-Tick/MeshMC/releases/download/10.0.0/MeshMC-Linux-aarch64.AppImage
chmod +x ./MeshMC-Linux-aarch64.AppImage
./MeshMC-Linux-aarch64.AppImage
```

## Community Packages

### Arch Linux / Manjaro

Packages are available in both the official Arch Linux/Manjaro repositories and the AUR (Development Builds)

[![meshmc](https://img.shields.io/badge/AUR-meshmc-blue?logo=archlinux&logoColor=white)](https://aur.archlinux.org/packages/meshmc/)

#### Installing MeshMC

```bash
# Latest release
yay -S meshmc
```

### CentOS Stream / Fedora / Red Hat Enterprise Linux

RPM packages are available on [Copr](https://copr.fedorainfracloud.org/coprs/yongdohyun/Project-Tick/) for x86_64 and aarch64

If you are on an Enterprise Linux distribution (RHEL, CentOS, Rocky, etc.) and do not have the EPEL repositories enabled, please enable them [here](https://docs.fedoraproject.org/en-US/epel/#_el9)

```bash
# Enables the copr repo
sudo dnf copr enable yongdohyun/Project-Tick
# Install the latest release
sudo dnf install meshmc
```
