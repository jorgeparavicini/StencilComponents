import { r as registerInstance, h } from './index-e5d59e02.js';

const defaultComponentScss = ":host{display:block}";

const DefaultComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.startTime = 0;
  }
  render() {
    return h("div", null, "Default StencilJS component");
  }
  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
};
DefaultComponent.style = defaultComponentScss;

export { DefaultComponent as default_component };
