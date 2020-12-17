'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b6824560.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["default-component.cjs",[[1,"default-component",{"startTime":[2,"start-time"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
