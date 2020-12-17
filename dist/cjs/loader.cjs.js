'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-def90b0b.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["home-component.cjs",[[1,"home-component",{"startTime":[2,"start-time"]}]]],["static-header-component.cjs",[[1,"static-header-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
