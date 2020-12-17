import { p as promiseResolve, b as bootstrapLazy } from './index-e5d59e02.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["default-component",[[1,"default-component",{"startTime":[2,"start-time"]}]]]], options);
  });
};

export { defineCustomElements };
