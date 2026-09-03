---
title: "MeshMC Release 7.2.0, now available"
description: "MeshMC Update 7.2.0, now available"
date: 2026-04-15
slug: "release-7.2.0"
release_version: "7.2.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

### Highlights

* Added a full **crash reporting and log management system**
* Improved the **update pipeline**, including feed parsing, version comparison, and updater integration
* Strengthened **error handling** during update checks and archive extraction
* Cleaned up launcher internals, compiler flags, and several code paths for clarity and stability
* Added initial **Pacman packaging**
* Introduced **AUR automation** through GitHub Actions
* Improved packaging directory structure and release patching workflow

### Changelog

#### Added

* Added a new **crash reporter** application and dialog flow for handling launcher crashes
* Added **CrashReportDialog** with QR code support for full logs and paste.ee links
* Added **MeshMCLogsDialog** for viewing and managing MeshMC logs
* Added support for **log uploading to paste.ee**
* Added **UpdateProgressDialog** to show updater progress and logs
* Added `MESHMC_BINARY` to `BuildConfig` for application binary naming
* Added a shell wrapper for the `meshmc` binary in portable tarball installations
* Added unit tests for `UpdateChecker`
* Added **Pacman package** support
* Added packaging directory placeholders with `.gitkeep`
* Added `.gitignore` for Pacman packaging outputs
* Added a GitHub Actions workflow for **automatic AUR package updates** for MeshMC

#### Changed

* Refactored version comparison in `UpdateChecker` to use `qint64` for better accuracy
* Refactored installer behavior to store downloaded archives in the install root
* Refactored stable feed item parsing in the update system
* Refactored process management in `ModernLauncher`
* Improved applet instantiation in `OneSixLauncher`
* Refactored `getKernelInfo` to use `QOperatingSystemVersion`
* Updated Java-related compile flags to use `--release`
* Adjusted CMake CXX flags by removing redundant warning flags for MSVC and refining non-MSVC flags
* Enhanced compiler flags for both MSVC and Unix builds to improve warning coverage and stricter handling
* Refactored multiple methods, parameters, and internal declarations for improved clarity and maintainability
* Reformatted MeshMC source code
* Updated the release workflow patching process by removing an unnecessary copy step

#### Fixed

* Fixed updater binary name references in `UpdateController`
* Added error handling for update check failures in `MainWindow`
* Improved extraction error handling in the installer
* Fixed type casting issues in several areas, including:

  * `rowCount`
  * `JsonFormat.cpp`
  * `VersionList::count`
* Fixed warnings in integrated `libnbtplusplus` code
* Improved packaging-related workflow structure for release automation

#### Removed

* Removed unused MeshMC documentation
* Removed unused helper functions and variables in several source files
* Removed unused parameters across multiple methods to simplify interfaces
* Removed unnecessary packaging-related copy behavior from the release workflow
