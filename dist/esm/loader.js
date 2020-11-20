import { p as promiseResolve, b as bootstrapLazy } from './index-8bebf794.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["default-component",[[1,"default-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
