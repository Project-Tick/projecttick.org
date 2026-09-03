---
title: "MeshMC Release 10.0.0"
description: "Very large!"
date: 2026-09-03
slug: "release-10.0.0"
release_version: "10.0.0"
minimum_macos_version: 12.0.0
macos_file_extension: zip
macos_signature: z/pWE8Gh1Knrqwhw6bsBbfsawEVaT3ec3pxq00AHYQhnIiKhl9+H8nB00wblaFUIUHLt+nK7xu9ERmlGdVDCBA==
tags:
  - Release
---

## A Big Change

* MeshMC is now offered under the Apache 2.0 license.

## Highlights

* It was heartbreaking, I'm not lying.
* Being alone is tough, but I like to persevere.
* This release is really full of emotion, no offense to anyone.
* Joking aside, this is the first time I'm releasing such a massive release.
* Everyone, calm down. Take a breath. Because if you try to hold it, you might choke, as I don't think you'll be able to read this release in one breath.

## Added

* Shortcut system has been added.
* A world selection feature has been added to the Shortcut system.
* Patreon link has been added.
* Title bar theming added for macOS.
* A setting to edit the Skins and Java folders has been added.
* The "Folder" tab in the top toolbar now includes a list of multiple useful folders.
* The mod installation and update system has been completely redesigned.
* Datapack installation and update system has been added.
* ShaderPack installation and update system has been completely redesigned.
* ResourcePack installation and update system has been completely redesigned.
* The ability to throw the instance in the trash has been added.
* Detailed logging feature has been added.
* Demo mode support has been added.
* The number of entries in the Instance Toolbar has been reduced and icons have been added.
* News display system has been added.
* Discord URL has been added.
* The ability to blacklist the plugin has been added.
* Backup system has been added.
* The "More News" tab has been added back.
* Toolbar locking system added.
* The ability to move two toolbars other than the instance toolbar has been added.
* A toolbar that works with the <ALT> key has been added, except for macOS.
* The backup process now shows a progress bar.
* ModPack management support has been added.
* Multiple instance folder support has been added.
* Export via MRPack and Curseforge ZIP has been added.
* A separate screen was created for loaders.
* vcpkg build system has been added.
* RPM Spec has been added.

## Changed

* GreenDark theme palette updated.
* The macOS ToolBar code has been rewritten.
* The repository structure has been rebuilt.
* Minecraft is now downloaded every time an instance is created.
* vcpkg automates bootstrap and package management.
* The `std::optional` feature, introduced in the C++17 standard, is now in use.
* Path corrections have been added for UNIX installations (excluding macOS), especially for Linux; compatibility with Debian and RedHat policies has been ensured.
* Crowdin translations have been updated.

## Fixed

* The problem of Minecraft not closing when trying to kill an instance on Windows has been solved.
* The error of not adding version entries in NSIS has been fixed.

## Removed

* The ability to directly delete instances has been removed.
* The Filelink plugin has been removed.
* MinGW aarch64 test and packaging removed.
* The NewsViewer plugin has been removed.
* The BackupSystem plugin has been removed.
* PackUpdater plugin has been removed.
* PackPortal plugin has been removed.
* The Feature Flag feature has been completely removed.
* All Rust code has been removed.
* Optional Bare library has been removed.
* Analysis collection has been removed.

## Deprecated

* MMCO API: The ability to add input to the Instance Toolbar has been deprecated and changed to no-op.
