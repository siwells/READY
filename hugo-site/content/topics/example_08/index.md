---
title: 'Example #8: Audio - A Simple Bit-Tune'
date: 2021-08-06T14:02:37+10:00
weight: 9
---


<!--more-->

```
var context = new (window.AudioContext || window.webkit.AudioContext)();
var freq = {
    'c4'    :261.6256,
    'c4#'   :277.1826,
    'd4'    :293.6648,
    'd4#'   :311.1270,
    'e4'    :329.6276,
    'f4'    :349.2282,
    'f4#'   :369.9944,
    'g4'    :391.9954,
    'g4#'   :415.3047,
    'a4'    :440.00, 
    'a4#'   :466.16, 
    'b4'    :493.92, 
    'c5'    :523.28, 
    'c5#'   :554.40, 
    'd5'    :587.36, 
    'd5#'   :622.24, 
    'e5'    :659.28, 
    'f5'    :698.48, 
    'f5#'   :740.00, 
    'g5'    :784.00, 
    'g5#'   :830.64,
    'a5'    :880.0000 
}

for (i in D = ['e5',, 'e5',, 'e5',, 'c5',, 'e5',, 'g5',, 'g5']) {
    console.log(i);
    var oscillator = context.createOscillator();
    if (D[i]) {

        onended = function() { console.log('Note has stopped playing'); }

        oscillator.connect(context.destination);
        note = D[i]
        oscillator.frequency.setValueAtTime(freq[note], context.currentTime);
        oscillator.type = 'square';
        oscillator.start(i * .1);
        oscillator.stop(i * .1 + .1);
    }
}
```
