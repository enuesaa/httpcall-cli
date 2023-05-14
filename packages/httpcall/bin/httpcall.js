#!/usr/bin/env node --experimental-loader @esbuild-kit/esm-loader

/**
 * @see https://github.com/slidevjs/slidev/blob/main/packages/slidev/bin/slidev.js
 * @see https://numb86-tech.hatenablog.com/entry/2020/06/03/203722
 * 
 * nodejs 19 で experimental-specifier-resolution が使えなくなるので --experimental-loader @esbuild-kit/esm-loader に切り替えたい
 */

import '../dist/cli'
