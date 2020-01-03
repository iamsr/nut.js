## Disclaimer

This project if based on [octaImage/robotjs](https://github.com/octalmage/robotjs) and is used internally at [nut-tree/nut.js](https://github.com/nut-tree/nut.js).

## Building

Please ensure you have the required dependencies before installing:

* Windows
  * windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)
* Mac
  * Xcode Command Line Tools.
* Linux
  * cmake
  * A C/C++ compiler like GCC.
  * libxtst-dev and libpng++-dev (`sudo apt-get install libxtst-dev libpng++-dev`).

### Release build

```
npm install
npm run build:release
```

Installation and build on Windows

```
npm install
npm run build:release:win
```

### Debug build

```
npm install
npm run build:debug
```

Installation and build on Windows

```
npm install
npm run build:debug:win
```
