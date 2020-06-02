# JS-Skeleton-ES
A skeleton Project for Javascript Libraries

{{>main}}

## Notes

To transpile ES modules to CJS modules
```
rm -rf o/_; rollup index.js Tests/* --format cjs --preserveModules  --dir o/_ --sourcemap
```

Modules don`t have __directory or __filename defined

For bundling in nodejs modules https://github.com/rollup/plugins/tree/master/packages/node-resolve