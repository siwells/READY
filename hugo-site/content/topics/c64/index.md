---
title: 'C64 Emulator'
date: 2019-02-11T19:27:37+10:00
weight: 110
---


I mentioned the C64 as being my first real computer. For various reasons. the hardware is relatively rare these days (although still actually available to buy), but there are many really good emulators. For example, I've linked an online tutorial that will lead you through writing and running some simple programmes. Then I've embedded a copy of the WASM based C64 emulator from [Tiny Emus](https://floooh.github.io/tiny8bit/) and have provided a few one-liners to get you started. This emulator is more accurate in terms of the hardware simulation part, in particular memory mapping for PEEKs and POKEs but still a bit flaky. Finally there's a link to the VICE emulator and a copy of the bat and ball game programme from the first tutorial, adapted to work with VICE on a faithful simulation of the original hardware.

## Introductory Tutorial

First give this tutorial a try: [C64 tutorial](https://tomasp.net/commodore64/). It builds a simple bat and ball game in around fifty lines of Basic. It's a great way to get an idea of what it can be like to programme on an old 8-bit machine from nearly fifty years ago. However, be aware that this emulator deviates a little from the real world hardware, specificaly in how the memory mapping table is allocated. For example, screen coodinates, for PEEKing and POKEing graphics on screen, start at 0 on this tutorial's emulator but start at 1024 on a real machine. There are a few other gotchas in there as well, to do with a few BASIC language usages, but it is largely accurate.

## Online C64 Emulator

Once you've done the above tutorial, it's worth trying an emulator of the actual hardware. One which uses an accurate memory map and more accurate version of BASIC.So try out this [C64 emulator](/READY/demos/c64/index.html). It's worth opening in a new tab so you can see the sample programmes in the next section to aid whilst typing them in.


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

So let's come full circle. Here's a modified version of the bat and ball programme from the first tutorial, but amended to work on an accurate emulator. Note that we could have typed this into the previous online emulator as well, but that's a bit frustrating. In VICE we can just copy and paste (although if you're learning, remember that the act of typing is part of your deliberate practise, it slows things down so that you can deliberate and consider each line of code and how it relates to its siblings).

```js
1000 rem init
1010 x=1024
1020 y=0
1030 dx=1
1040 dy=1
1050 p=10
1051 q=1024
1100 print chr$(147)
2000 rem ball movement
2010 poke ((y*40)+x), 32
2020 x=x+dx
2030 y=y+dy
2031 if (x=1024) and (y<p) then goto 3000
2032 if (x=1024) and (y>(p+4)) then goto 3000
2040 if x=1064 then dx=-1
2050 if x=1064 then x=1062
2060 if x<1024 then dx=1
2070 if x<1024 then x=1024
2080 if y=25 then dy=-1
2090 if y=25 then y=23
2100 if y<0 then dy=1
2110 if y<0 then y=2
2200 poke ((y*40)+x), 81
2500 rem moving paddle
2510 k$=""
2520 k=0
2530 get k$
2540 if k$<>"" then k=asc(k$)
2550 if k=145 then p=p-1
2560 if k=17 then p=p+1
2561 if p<0 then p=0
2562 if p>20 then p=20
2570 if p>0 then poke (((p-1)*40)+q), 32
2571 poke (((p+0)*40)+q), 66
2572 poke (((p+1)*40)+q), 66
2573 poke (((p+2)*40)+q), 66
2574 poke (((p+3)*40)+q), 66
2575 poke (((p+4)*40)+q), 66
2576 if p<20 then poke (((p+5)*40)+q), 32
2580 goto 2000
3000 rem game over
3010 print chr$(147);
3020 s=0
3030 s=s+1
3040 print "               game over"
3050 if s<25 then goto 3030
3060 print chr$(147)
```

****Note that the code above is in lowercase but when typed into VICE it will be uppercase. If you try to paste an upper-cased version of this programme then the uppercase characters are converted to the alternative graphical glyphs that accompany each key on the original C64 hardware keyboard. Basically each key, using an additional modifier, allowed you to type weird squiggles on screen that could be used to build images and patterns. All these glyphs are also available through the character string map, so one thing to play with is exploring what you can print to screen using the "print chr$()" command and supplying different numbers within the parenthesis.***

At this point, it's worth considering how you could play with this code to make a better game. You have access to everything so can easily change the starting location of the ball, the speed of the ball, or the speed at which the bat moves, or the size of the bat. Perhaps you want a bigger ball, or a number of lives before game over, or perhaps multiple levels, with some changes to make the game harder each time. What about a score that increments each time you successfully hit the ball? Or perhaps modify how the ball deflects depending upon how the bat hits it? Or perhaps some blocks within the play field that the ball can bounce from? 

Basically the possibilities are endless. Which is probably the real power of computer programming. If it's within the machine, then the possibilities are endless...

Well technically they're not, there are limits. Computer Science is, at its core, basically, the discipline that answers questions like "what questions can we answer using a computer and which can we not?". When we know which questions we can answer, the question then is possibly "how long does it take to answer this question?" or "what resources are needed to answer this question?". But that's perhaps a tale for another day.
