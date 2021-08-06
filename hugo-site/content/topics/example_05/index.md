---
title: 'Example #5: Graphics: Canvas Colour'
date: 2021-08-06T13:57:37+10:00
weight: 50
---

Set the colour of the background to a given colour.

<!--more-->

```
var c = document.createElement("Canvas");
c.id = "cv";
c.style.cssText = ' height: 100%; width: 100%; position:absolute; overflow:hidden; background-color: black; ';
var ctx = c.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
document.body.replaceWith(c);
```
