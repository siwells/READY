---
title: 'Example #6: Graphics - Draw a Circle'
date: 2021-08-06T14:00:37+10:00
weight: 7
---


```
let c = document.createElement("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
document.body.replaceWith(c);
```
