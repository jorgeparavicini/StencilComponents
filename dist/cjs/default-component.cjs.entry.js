'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b6824560.js');

const defaultComponentScss = ":host{display:block}";

const DefaultComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.startTime = 0;
  }
  render() {
    return index.h("div", null, "Default StencilJS component");
  }
  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
};
DefaultComponent.style = defaultComponentScss;

exports.default_component = DefaultComponent;
