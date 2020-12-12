import { p as promiseResolve, b as bootstrapLazy } from './index-04d084f4.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["gallery-component",[[0,"gallery-component",{"galleryEntries":[16]}]]],["home-component",[[1,"home-component"]]],["static-header-component",[[1,"static-header-component"]]]], options);
  });
};

export { defineCustomElements };
