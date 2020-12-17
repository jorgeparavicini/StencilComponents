import { p as promiseResolve, b as bootstrapLazy } from './index-54d006a6.js';

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
  return bootstrapLazy([["gallery-component",[[0,"gallery-component",{"galleryEntries":[16],"startTime":[2,"start-time"]}]]],["home-component",[[1,"home-component"]]],["static-header-component",[[1,"static-header-component"]]]], options);
});
