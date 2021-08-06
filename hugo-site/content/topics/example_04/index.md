---
title: 'Example #4: Interacting with the document'
date: 2021-08-06T13:56:37+10:00
weight: 40
---

Creating a simple HTML document from JS.

<!--more-->

```
let p = document.createElement("P");
let t = document.createTextNode("Hello Napier!!!");
p.appendChild(t);
document.body.replaceWith(p);
```
