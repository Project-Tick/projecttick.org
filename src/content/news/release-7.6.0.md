---
title: "MeshMC Release 7.6.0, now available"
description: "Major cleanup of build system dependencies across macOS and cross-platform targets and more."
date: 2026-04-19
slug: "release-7.6.0"
release_version: "7.6.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

### Highlights

* Major cleanup of build system dependencies across macOS and cross-platform targets
* Reduced optional compression and crypto surface (LZ4, ZSTD, OpenSSL disabled)
* Improved licensing compliance coverage via REUSE updates
* Continued stabilization of cross-platform build pipeline (macOS, Windows, MinGW)

### Changelog

#### Added

* macOS support for building libarchive from source
* tomlplusplus integration into the build process

#### Changed

* Refactored macOS dependency setup and streamlined CMake flags
* Adjusted dependency management for macOS and Windows builds
* Updated REUSE configuration to expand license annotation coverage
* Simplified build configuration by disabling optional components (LZ4, ZSTD, OpenSSL)

#### Fixed

* Build issues in dependency handling across macOS and Windows environments
* Inconsistencies in CMake configuration related to optional libraries

#### Removed

* qrencode from macOS dependency installation
* vcpkg meson tool port and related patches
