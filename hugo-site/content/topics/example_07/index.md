---
title: 'Example #7: Audio - Generate a Tone'
date: 2021-08-06T14:01:37+10:00
weight: 70
---

Generate a simple audio tone at a give freqency.

<!--more-->

```
var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(220, context.currentTime);
oscillator.connect(context.destination);
oscillator.start(0);
```
