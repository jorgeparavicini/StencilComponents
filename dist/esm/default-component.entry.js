import { r as registerInstance, h } from './index-8bebf794.js';

const defaultComponentScss = ":host{display:block}";

const DefaultComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, "Default StencilJS component");
  }
};
DefaultComponent.style = defaultComponentScss;

export { DefaultComponent as default_component };
