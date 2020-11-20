'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-169a9f5d.js');

const defaultComponentScss = ":host{display:block}";

const DefaultComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, "Default StencilJS component");
  }
};
DefaultComponent.style = defaultComponentScss;

exports.default_component = DefaultComponent;
