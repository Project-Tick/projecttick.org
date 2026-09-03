---
title: "MeshMC Release 7.11.0, now available"
description: "This is a kind of return to the classic theme, but it still includes some solid fixes. Although it might not make much difference to humanity, it's the version that fooled me by making me refresh the screenshots."
date: 2026-04-23
slug: "release-7.11.0"
release_version: "7.11.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

This is a kind of return to the classic theme, but it still includes some solid fixes. Although it might not make much difference to humanity, it's the version that fooled me by making me refresh the screenshots.

### Highlights

* Improved UI responsiveness and stability
* New Instance Settings integration
* Version 7.11.0 with new themes

### Changelog

#### Added

* Instance Settings action in MainWindow toolbar
* GreenDark and GreenLight themes

#### Changed

* Modpack detection moved to background thread
* Replaced QDesktopServices with DesktopServices
* Updated minimum CMake version to 3.20
* Updated Screenshots for new themes

#### Fixed

* Crash caused by improper model reset handling in setSourceModel
* Error handling improvements in archive read/write
* Prevented unnecessary processing for empty logo URLs
