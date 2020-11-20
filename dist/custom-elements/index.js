import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const defaultComponentScss = ":host{display:block}";

const DefaultComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return h("div", null, "Default StencilJS component");
  }
  static get style() { return defaultComponentScss; }
};

const DefaultComponent$1 = /*@__PURE__*/proxyCustomElement(DefaultComponent, [1,"default-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      DefaultComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { DefaultComponent$1 as DefaultComponent, defineCustomElements };
