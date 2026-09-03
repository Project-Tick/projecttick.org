---
title: "MeshMC Release 7.0.0, now available"
description: "This is MeshMC 7.0.0. This release ports the project from Qt5 to Qt6, migrates from the old CurseForge API to the new one, adds Modrinth support, and more!"
date: 2026-04-12
slug: "release-7.0.0"
release_version: "7.0.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

Today, we aren't just talking about ~~MultiMC~~. This is not true. ~~PrismLauncher~~? Again no. Okay, ~~ProjTLauncher~~? Again and again, no. This is **MeshMC** 7.0.0. This release ports the project from Qt5 to Qt6, migrates from the old CurseForge API to the new one, adds Modrinth support, and more!

### Welcome to customizable Catpacks

Catpacks are now customizable. To build your own cat empire, you can add your catpacks to the catpacks folder located in the binary folder within `%AppData%\MeshMC` or `.local/share/MeshMC`, or if you are using a portable binary.

### Modrinth support, now available

Now you'll be able to install Modrinth packages, and I hope this will make everyone happy.

### Say hello to a launcher that includes Qt6

MeshMC 7.0.0 has completed the Qt6 migration by default, which is especially important for our future-proofing and for you to use the launcher more comfortably. If you encounter a bug or problem, please start an issue using <https://github.com/Project-Tick/Project-Tick/issues>. Because this migration can cause tons of problems.

### Other Changes

- Download your Java applications easily through your launcher with **JavaDownloader**.
- **Neoforge** and **Quilt** support has been added. You can quickly install **Neoforge** and **Quilt** from the instance edit menu.
- The **libnbt++** module now comes with meticulously crafted patches from **Project Tick**.
- We are now sharing our **Client IDs** so that developers and users can get custom builds.
- Added more themes and icons.
- Now you can log in to your Microsoft account more easily with endpoint.
- Refined AboutPage.
- Changed Quazip dependency to libarchive
- Fixed more bugs.

### Note

MeshMC is a continuation of MultiMC. We've implemented AI Usage Policies and GPL transitions to make MeshMC more free, and you can be sure our code is more open to use. Our difference is that we aim to create a Minecraft launcher that people can compile even 20 years from now, freely package wherever they want, maintain the simplicity and iconic appeal of MultiMC, while also adding new features and always keeping that line. We are very happy to see you with this release, but we also want to guarantee that the problems that befell ProjT Launcher will not occur here. The reasons we abandoned ProjT Launcher were primarily licensing issues and problems with the codebase due to it being a PrismLauncher fork, but we want to preserve the MultiMC foundation in MeshMC. Therefore, we shut down ProjT Launcher. Thank you for your support. **Stay with your cats.**
