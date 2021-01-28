# JS-Skeleton-ES
A skeleton Project for Javascript Libraries

<a name="JS-Skeleton-ES"></a>

## JS-Skeleton-ES : <code>object</code>
**Kind**: global namespace  

* [JS-Skeleton-ES](#JS-Skeleton-ES) : <code>object</code>
    * [.Point](#JS-Skeleton-ES.Point)
        * [new Point(x, y)](#new_JS-Skeleton-ES.Point_new)
        * [.getPosition()](#JS-Skeleton-ES.Point+getPosition) ⇒ <code>number</code> \| <code>Array</code>
    * [.random()](#JS-Skeleton-ES.random) ⇒ <code>number</code>

<a name="JS-Skeleton-ES.Point"></a>

### JS-Skeleton-ES.Point
A class containing the X and Y position of a 2D point

**Kind**: static class of [<code>JS-Skeleton-ES</code>](#JS-Skeleton-ES)  

* [.Point](#JS-Skeleton-ES.Point)
    * [new Point(x, y)](#new_JS-Skeleton-ES.Point_new)
    * [.getPosition()](#JS-Skeleton-ES.Point+getPosition) ⇒ <code>number</code> \| <code>Array</code>

<a name="new_JS-Skeleton-ES.Point_new"></a>

#### new Point(x, y)

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="JS-Skeleton-ES.Point+getPosition"></a>

#### point.getPosition() ⇒ <code>number</code> \| <code>Array</code>
Get position of Point

**Kind**: instance method of [<code>Point</code>](#JS-Skeleton-ES.Point)  
<a name="JS-Skeleton-ES.random"></a>

### JS-Skeleton-ES.random() ⇒ <code>number</code>
Returns a random number

**Kind**: static method of [<code>JS-Skeleton-ES</code>](#JS-Skeleton-ES)  
**Returns**: <code>number</code> - A number in the range of 0 to 100  

## Notes

To transpile ES modules to CJS modules
```
rm -rf o/_; rollup index.js Tests/* --format cjs --preserveModules  --dir o/_ --sourcemap
```

Modules don`t have __directory or __filename defined

For bundling in nodejs modules https://github.com/rollup/plugins/tree/master/packages/node-resolve