---
title: 'C64 Emulator'
date: 2019-02-11T19:27:37+10:00
weight: 110
---


I mentioned the C64 as being my first real computer. For various reasons. the hardware is relatively rare these days (although still actually available to buy), but there are many really good emulators. For example, I've embedded a copy of the WASM based C64 emulator from [Tiny Emus](https://floooh.github.io/tiny8bit/) and have provided a few one-liners to get you started.

## Online C64 Emulator

Try out a [C64 emulator](https://siwells.github.io/READY/demos/c64/index.html). 


## Some programmes to try out on the emulator...

Type it in. Then type RUN and press return.


The classic first programme:

```js
10 PRINT "HELLO WORLD!"
```


The first variation on the classic "Hello World" programme:

```js
10 PRINT "HELLO WORLD!"
20 GOTO 10
```


A C64 Classic one-liner:
```js
10 PRINT CHR$(205.5+RND(1)); : GOTO 10
```


## A more robust C64 emulator

The browser based version above is a little buggy, and can get a bit frustrating. So I recommend downloading an actual emulator programme that is a bit more robust. Vice, the [Versatile Commordore Emulator](https://vice-emu.sourceforge.io/) is probably the best to play with.

Download the version for your machine (Nix, MacOS, Windows, etc.). Unpack the archive and you can then run the C64 emulator by invoking the x64sc file from wherever it is located. On Windows this is x64sc.exe in the bin folder. On MacOS it is the x64sc.app in the root folder. A nice thing about VICE is that you can also copy and paste code into and out of the emulator window. So you can edit code in a proper editor instead of using the, whilst authentic, also rather frustrating, nearly 50 year old, line-editing mode of the C64.
