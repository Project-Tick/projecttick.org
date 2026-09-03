---
title: Using MeshMC via the Command Line
sidebar:
  label: Command Line Interface
---

```text
Usage: meshmc [-h] [-V] [-d <dir>] [-l <launch>] [-s <server>] [-a <profile>] [--alive] [-I <import>] [-L] [-i <instance-info>] [-E <export>] [-o <output>]

Options & Switches:
  -h, --help            Display this help and exit.
  -V, --version         Display program version and exit.
  -d, --dir <dir>       Use the supplied folder as application root instead of the binary location (use '.' for current)
  -l, --launch <launch> Launch the specified instance (by instance ID)
  -s, --server <server> Join the specified server on launch (only valid in combination with --launch)
  -a, --profile <profile> Use the account specified by its profile name (only valid in combination with --launch)
  --alive               Write a small 'live.check' file after MeshMC starts
  -I, --import <import> Import instance from specified zip (local path or URL)
  -L, --list-instances  List all instances and exit.
  -i, --instance-info <instance-info> Show detailed information about the specified instance (by ID) and exit.
  -E, --export <export> Export the specified instance to a zip file. Requires --output to set the destination path.
  -o, --output <output> Output file path (used with --export).
```

## What is an instance ID, and where do I find it?

The instance ID is the name of the folder where your instance is contained.

To find it, **right-click** on the instance you want to know the ID of, and then click on _Instance Folder_ within the context menu.

Now, just copy the name of the folder that opened.

## MeshMC is still opening after I close Minecraft

Currently, the _Close MeshMC after game window opens_ option opens MeshMC after closing Minecraft, even when launched from the CLI.

To disable this, open _Settings_, then select _Minecraft_, and finally, un-check _Close MeshMC after game window opens_ or check _Quit the launcher after game window closes_.
