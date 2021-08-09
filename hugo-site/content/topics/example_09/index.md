---
title: 'Example #9: Audio - A Theremin'
date: 2021-08-06T14:03:37+10:00
weight: 90
---

An effort to make a Theremin that uses the cursor position on screen to control the volume and frequency of a generated sound. 

<!--more-->

The sound only plays when the mouse button is down (so it also, kinda, sorta, emulated the "plucking" motion that can allow a Theremin to play distinct notes rather than just a glissando.

Note that if we wanted this to be even more accurate and authentic then there are some extra filters that we'd apply to the signal to match the hardware in a real Theremin. I'd also add a ramp down at the end of the signal to get rid of the click artefact when the sound turns on and off...

```
var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator();
var volume = context.createGain();
var active = false;

volume.gain.setValueAtTime(0, context.currentTime);

oscillator.connect(volume).connect(context.destination);
oscillator.start(0);

document.addEventListener('mousedown',function(e){on(e)})
document.addEventListener('mousemove',function(e){play(e)})
document.addEventListener('mouseup',function(e){off(e)})

function on(e){
    active = true;
    e.preventDefault()
    oscillator.frequency.setValueAtTime(~~(1000*(1-((e.clientY)/window.innerHeight))), context.currentTime);
    volume.gain.setValueAtTime(~~(e.clientX/window.innerWidth*100)/100, context.currentTime);
}


function play(e){
    e.preventDefault()
    if(active){
        oscillator.frequency.setValueAtTime(~~(1000*(1-((e.clientY)/window.innerHeight))), context.currentTime);
        volume.gain.setValueAtTime(~~(e.clientX/window.innerWidth*100)/100, context.currentTime);
    }
}

function off(e){
    active = false;
    volume.gain.setValueAtTime(0, context.currentTime);
}
```

## Live Demo

Try out a [live demo](https://siwells.github.io/READY/demos/example_09.html) of the Theremin
