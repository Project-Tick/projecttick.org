---
title: "MeshMC Release 7.14.0, now available"
description: "MeshMC now includes a new Linux performance integration plugin, bringing launcher-level support for MangoHud and GameMode and more..."
date: 2026-04-26
slug: "release-7.14.0"
release_version: "7.14.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

MeshMC now includes a new Linux performance integration plugin, bringing launcher-level support for MangoHud and GameMode. This improves the Linux gameplay launch path by allowing performance tooling to be injected and managed more cleanly during Minecraft startup, instead of relying on users to wire everything manually like it is 1998 and desktop Linux is still a punishment ritual.

This release also improves launch wrapper state handling by moving transient launch state into `LaunchTask`, making the launch flow cleaner, less fragile, and easier to maintain. Module/version management has also been improved through new SDK version definitions in `mmco_sdk.h`.

And this is the final version of Project Tick before the Beta and LTS channels are released. Just so you know.

### Changelog

#### Added

- Added the `LinuxPerf` plugin for Linux performance tooling integration.
- Added MangoHud integration support through the new Linux performance plugin.
- Added GameMode integration support for Minecraft launches.
- Added versioning definitions to `mmco_sdk.h` to improve module management and compatibility tracking.
- Added a confirmation dialog before deleting skins in `AccountListPage`, reducing the chance of accidental skin removal.

#### Changed

- Refactored launch wrapper handling to use `LaunchTask` for transient state management.
- Improved launch-related documentation after the launch wrapper refactor.

#### Fixed

- Added Apple-specific install RPATH handling for `crashreporter` and `updater` targets.
- Improved platform-specific install behavior for macOS helper targets.
