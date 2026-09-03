---
layout: ../../layouts/DownloadLayout.astro
title: Windows Download
platform: windows
description: Download MeshMC for Windows
screenshotLight: /img/screenshots/landing/windows_light.png
screenshotDark: /img/screenshots/landing/windows_dark.png
screenshotAlt: MeshMC screenshot on Windows showing off various different modpacks and instances
---

## Advanced Windows Install Options

### WinGet Package

MeshMC is available on WinGet. You can install it using the following command:

```cmd
winget install --exact ProjectTick.MeshMC
```

### MinGW

These builds are built with MinGW and do not require the Visual C++ Redistributable to be installed on your system. They require Windows 10/11 64bit. **These builds are less tested than the MSVC builds.**

- [Installer (x86-64) (.exe)](https://github.com/Project-Tick/MeshMC/releases/download/10.0.0/MeshMC-Windows-MinGW-w64-Setup-10.0.0.exe)
