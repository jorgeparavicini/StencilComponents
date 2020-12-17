import { p as promiseResolve, b as bootstrapLazy } from './index-163f13b8.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["static-header-component",[[1,"static-header-component",{"startTime":[2,"start-time"]}]]]], options);
  });
};

export { defineCustomElements };
