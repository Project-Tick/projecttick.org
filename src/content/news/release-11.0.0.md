---
title: "MeshMC Release 11.0.0, now available"
description: "A clean release"
date: 2026-11-02
slug: "release-11.0.0"
release_version: "11.0.0"
tags:
  - Release
---

## Highlights

* We’ve made some general improvements!
* We hope MeshMC now offers a better experience for you.

## Added

* Automatic icon refreshing upon theme change has been added.
* Support for reading non-ASCII paths has been added.
* A feature to view the number of days in your worlds has been added.
* The --world parameter has been added.
* A skin management system has been added.
* An option has been added to launch the instance using other accounts via the "Launch as" option.

## Changed

* The logging system has been updated. We now use categorical logging. You can disable unwanted categories using qtlogging.ini.
* We have revised the update system. Updates are handled via Sparkle for macOS and ZSync for AppImage. A setup.exe installation package is used for Windows, while a two-stage update mechanism is employed for portable Windows and Linux versions.
* The MainWindow used to have its UI drawn via .cpp code; now, Designer UI is used.
* The XDGIcon structure has been removed, and the system has switched to the internal Qt icon infrastructure.
* The logo has been revised to better align with standards for macOS Big Sur and other platforms.
* Deep branding has been completed.
* The URL on the translation page has been corrected.

## Fixed

* Fixed buttons that remained active even when no instance was selected in the MainWindow.
* An issue where the Publisher ID written to the registry during NSIS installations appeared as "MeshMC Contributors" has been resolved; it has been corrected to "Project Tick".

## Removed

* The iconfix library has been removed because it is no longer in use.
