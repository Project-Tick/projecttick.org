---
title: "MeshMC Release 12.0 series is now ready!"
description: "Time for a revolution for MeshMC!"
date: 2026-11-25
slug: "release-12.0"
release_version: "12.0"
tags:
  - Release
---

## Hightlights

Hello everyone! It’s been a little while not too long, but some time has passed. MeshMC is starting fresh! We’ve caught up to the latest point in the MultiMC codebase; we are now fully synced with the most recent commit. Furthermore, we’ve overhauled the update system. From now on, I’ll only be posting "highlights" here, as we’ve shifted to a continuous update model meaning we are now fully integrated with MultiMC’s own updater. It’s a bit wild, but that’s how it is! You can view every individual change directly within the launcher. I’ll only be posting these kinds of tags for stable releases, distribution-specific builds, and platforms like Flathub. Please, if possible, don’t expect any more tags from me in the future. Rest assured, I’m working on speeding up the Flathub deployment process. Also, a quick note: this version is more about the new underlying foundation, which means some features may have been lost in the transition. You’re all the best take care, and give your cats some love!

## Codebase

* Moved to the latest commit of the codebase MultiMC.

## Loss of features

Many features were lost during the transition to the new system. But there are more critical ones.

* aarch64 support has completely disappeared.
* Rosetta 2 is now mandatory on macOS.
* Only win32 builds are now being performed in Windows CI.

## New infrastructure

* In the new CI, build processes have been moved entirely into containers.
* x86 builds have been added; there is now even support for Windows XP.

## Continuous Integration System (CIS)

The versioning system now consists of three stages: Testing, Stable, and Latest. Latest is always based on the most recent commit, Testing on the testing state, and Stable on the stable state. While it is possible to transition from Latest to Stable, we do not recommend it. Furthermore, we are discontinuing the use of tags, effective immediately.
