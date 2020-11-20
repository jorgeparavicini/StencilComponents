import { p as promiseResolve, b as bootstrapLazy } from './index-8bebf794.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["default-component",[[1,"default-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
