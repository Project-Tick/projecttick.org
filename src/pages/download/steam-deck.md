---
layout: ../../layouts/DownloadLayout.astro
title: Steam Deck Download
platform: steam-deck
description: Download MeshMC on Steam Deck
---

## Installation Instructions

### Flathub

The easiest way to install MeshMC on Steam Deck is through the Discover app store, which comes pre-installed on SteamOS.

1. Switch to Desktop Mode (hold power button, select "Switch to Desktop")
2. Open the Discover app
3. Search for "MeshMC"
4. Click Install

### Terminal

You can also install via terminal in Desktop Mode:

```bash
flatpak install flathub org.projecttick.MeshMC
```

### Add to Steam library

After installation, you can add MeshMC as a non-Steam game to access it from your Steam library in Game mode. When in Desktop mode, open up Steam and click on `Games` in the menu bar. Then click on `Add a Non-Steam Game to My Library...`. There you can find `MeshMC` and click `ADD SELECTED PROGRAMS`. Now MeshMC should be in your Steam library.

### Artwork

If you've added MeshMC to your Steam library, you might want to add artwork to the non-Steam game so that it looks better in your library.

The easiest way to set up artwork on the Steam Deck is to use [SteamGridDBBoop](https://www.steamgriddb.com/boop). You can check out [MeshMC's SteamGridDB page](https://www.steamgriddb.com/game/5359069) for our official artwork and also community-provided artwork. Alternatively, there is a [SteamGridDB page of Minecraft](https://www.steamgriddb.com/game/38365) if you just want Minecraft artwork.

1. Install SteamGridDB Boop on your Steam Deck via the Discover software center.
2. Right-click on MeshMC in your Start Menu and select "Add to Steam".
3. After that, open the [SteamGridDB Boop website](https://www.steamgriddb.com/boop) and click on "Show a test popup" button.
4. If you see a popup, you can close it and continue. If not, run `systemctl restart --user xdg-desktop-portal` in a terminal.
5. Then, click the button again. You should now see a popup. If not, try reading the troubleshooting section on the [SteamGridDB Boop website](https://www.steamgriddb.com/boop).
6. Enable the "Enable SteamGridDB Boop" option in the SteamGridDB Boop settings. You should see a green notification saying "BOOP buttons enabled".
7. Head to your preferred SteamGridDB page and click on the "BOOP" button on each artwork you want to use. It is recommended to set one of each type of artwork so that it looks good in your library. You will then get a popup asking you to select the game you want to add the artwork to. Select MeshMC and click "OK".

That's it! You should now see the artwork in your Steam Library.
