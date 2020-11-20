import { r as registerInstance, h } from './index-8bebf794.js';

const myComponentScss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, "Default StencilJS component");
  }
};
MyComponent.style = myComponentScss;

export { MyComponent as my_component };
