---
title: "MeshMC Release 7.5.0, now available"
description: "Improved Java management with auto-download vendor selection and refined settings handling and more."
date: 2026-04-18
slug: "release-7.5.0"
release_version: "7.5.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

### Highlights

* Improved Java management with **auto-download vendor selection** and refined settings handling
* Added **cross-platform dependency build scripts** (Linux & macOS & Windows)
* Internal improvements to **file watcher lifecycle and cleanup stability**

### Changelog

#### Added

* Java auto-download **vendor selection support**
* Java-related **settings management system**
* Build scripts for dependencies on:

  * Linux
  * macOS
  * Windows

#### Changed

* Refactored Java auto-download configuration logic
* Improved internal handling of Java settings
* Enhanced file watcher lifecycle management and cleanup behavior

#### Fixed

* Potential issues related to file watcher cleanup and resource handling
