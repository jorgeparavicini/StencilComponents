import { p as promiseResolve, b as bootstrapLazy } from './index-163f13b8.js';

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
  return bootstrapLazy([["home-component",[[1,"home-component",{"startTime":[2,"start-time"]}]]],["static-header-component",[[1,"static-header-component"]]]], options);
});
