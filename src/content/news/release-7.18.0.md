---
title: "MeshMC Release 7.18.0, now available"
description: "Removed GitHub control from the MeshMC updater and more."
date: 2026-05-03
slug: "release-7.18.0"
release_version: "7.18.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
tags:
  - Release
---

### Highlights

* Removed GitHub control from the MeshMC updater.
* Fixed the debug message appearance in the MeshMC Plugin System.
* Updated BuildConfig to remove the `-rSHA` suffix and related build metadata handling.
* Improved MeshMC CrashReporter by censoring sensitive regex patterns.

### Changelog

#### Changed

* Changed BuildConfig so release metadata no longer includes the `-rSHA` suffix.

#### Fixed

* Fixed MeshMC updater behavior by removing GitHub control.
* Fixed the debug message appearing during the MeshMC plugin flow.
* Fixed CrashReporter privacy handling by censoring sensitive regex matches.

#### Removed

* Removed GitHub control from the MeshMC updater.
* Removed the `-rSHA` suffix from BuildConfig output.
