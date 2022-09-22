---
title: 'C64 Emulator'
date: 2019-02-11T19:27:37+10:00
weight: 110
---

Let's put our money where our mouth is and actually play with a C64. The hardware is relatively rare these days (although still actually available to buy), but there are many really good emulators

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

