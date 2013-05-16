seasick.js
==========

Make your page absolutely nauseating! When you move your mouse to the left or right of center, the whole page will rotate.

* * *

Usage
-----
```
$.seasick(amount, target, no_crop);
```
* `amount`: Max rotation in each direction
* `target`: The thing to rotate
* `no_crop`: If set, this will not set `overflow-x: hidden;` on the document body

Examples
--------

**Gentle sway**
```
$.seasick(5);
```

**Fighter pilot**
```
$.seasick(180);
```

**Rolling down a hill in a tire**
```
$.seasick(720);
```

* * *

*Don't do anything I wouldn't do.*
