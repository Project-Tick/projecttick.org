---
title: "MeshMC Release 7.1.0, now available"
description: "This release including Many changes. Lets go mods!"
date: 2026-04-14
slug: "release-7.1.0"
release_version: "7.1.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

This release including Many changes. Lets go mods!

### Highlights

* Added **in-launcher installation support** for mods, resource packs, and shader packs with a dependency solver
* Improved **update system and release pipeline**, including checksum generation and updater handling
* Completed large-scale **Qt6 signal-slot modernization refactor**
* General **build system, CI, and documentation cleanup**

### Changelog

#### Added

* In-launcher installation support for mods, resource packs, and shader packs
* Dependency solver for resolving content dependencies
* SHA-256 checksum generation in release workflow
* Updater binary discovery next to the running executable
* Improved portable mode detection logic

#### Changed

* Refactored update mechanism and updater execution flow
* Updated version handling to prioritize release tags
* Migrated signal-slot connections to modern Qt syntax across the codebase
* Updated CMake configuration, including Qt version constraints

#### Removed

* Removed obsolete MeshMC man page documentation
* Cleaned up unused files
* Dropped `qt5compat` dependency
* Removed unused `libnbtplusplus` inputs from flake configuration
* Removed CI tag trigger
