---
title: "MeshMC Release 7.4.0, now available"
description: "Fixed Major build system stabilization across CMake, CI, and monorepo library handling and more"
date: 2026-04-17
slug: "release-7.4.0"
release_version: "7.4.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

### Highlights

* Major build system stabilization across CMake, CI, and monorepo library handling
* Full Nix integration with derivations for all Project Tick components
* Transition toward system-provided dependencies and cleaner packaging model
* Improved library bundling strategy and source archive consistency
* Compression backend migrated from zlib to neozip

### Changelog

#### Added

* Nix derivations for all Project Tick projects
* `default.nix` and `shell.nix` for flake compatibility
* CI steps for installing **cxxtest** on Linux and macOS
* Support for building and installing monorepo libraries (including neozip and vcpkg dependencies) in CI
* CMake support for collecting binary directories from `CMAKE_PREFIX_PATH`
* Additional CMake configuration for handling monorepo library bin paths
* `ldconfig` step to refresh dynamic linker cache for shared libraries
* README documentation for bundled libraries

#### Changed

* Reworked GitHub Actions to support flexible library bundling and cleanup
* Refactored artifact naming in MeshMC workflow (removed Qt6 suffix)
* Updated CMake configuration to:

  * Use dynamic build types in CI workflows
  * Improve Release build handling
  * Resolve headers from installed system packages
  * Support multi-config generator mappings
* Dependencies are now assumed to be system-provided instead of bundled by default
* Library integration model updated to allow independent compilation of subprojects
* Replaced zlib with neozip for compression
* MeshMC source tree reformatted for consistency

#### Fixed

* Issues with missing binary paths for monorepo libraries during build/link stages
* CI inconsistencies related to dependency installation and build configuration
* General CMake configuration inconsistencies affecting multi-platform builds

#### Removed

* Legacy assumptions around bundled dependencies in favor of system-based linkage
* Redundant or conflicting commits (cleanup via targeted revert)
