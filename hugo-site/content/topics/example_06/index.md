---
title: 'Example #6: Graphics - Draw a Circle'
date: 2021-08-06T14:00:37+10:00
weight: 60
---

Draw a circle on screen.

<!--more-->

Notice that we don't use a "draw circle" function but instead we use a more general "draw arc" function which takes the center (x,y) coordinates, a radius, a start angle, and a finish angle (technically there is an additional parameter that we can set to control the direction in which the arc is draw, anticlockwise instead of the clockwise default).

```
let c = document.createElement("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
document.body.replaceWith(c);
```
