'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-169a9f5d.js');

const myComponentScss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, "Default StencilJS component");
  }
};
MyComponent.style = myComponentScss;

exports.my_component = MyComponent;
