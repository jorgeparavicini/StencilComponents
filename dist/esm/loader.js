import { p as promiseResolve, b as bootstrapLazy } from './index-e6b4bf18.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["static-header",[[1,"static-header"]]]], options);
  });
};

export { defineCustomElements };
