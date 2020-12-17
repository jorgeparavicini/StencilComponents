import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const staticHeaderComponentScss = ".header{display:flex;flex-flow:nowrap row;background-color:#2f2f2f;padding:1rem}.search{position:relative;border-radius:15%;flex:1 0 auto;margin-right:3rem}.search__label{display:none}.search__input{outline:0;width:100%;height:3rem;border-radius:0.5rem;padding:0 1rem;appearance:none;border:0}.nav{display:flex;flex-flow:nowrap row;align-items:center}.nav__label{margin-left:2rem;font-size:1.3rem;letter-spacing:0.15rem;text-transform:uppercase;text-decoration:none;color:#ccc;font-weight:lighter;transition:all 0.2s ease;display:inline-block;position:relative;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}.nav__label::after{background:none repeat scroll 0 0 transparent;bottom:0;content:\"\";bottom:-3px;height:1px;left:50%;position:absolute;background:#fff;transition:width 0.3s ease 0s, left 0.3s ease 0s;width:0}.nav__label:hover{color:white}.nav__label:hover::after{width:100%;left:0}";

const DefaultComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.startTime = 0;
  }
  render() {
    return (h("div", { class: "header" }, h("form", { role: "search", class: "search" }, h("input", { id: "search", type: "search", placeholder: "Search...", class: "search__input", autofocus: true, required: true })), h("nav", { class: "nav" }, h("a", { href: "/home", class: "nav__label" }, "Home"), h("a", { href: "/gallery", class: "nav__label" }, "Gallery"))));
  }
  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
  static get style() { return staticHeaderComponentScss; }
};

const StaticHeaderComponent = /*@__PURE__*/proxyCustomElement(DefaultComponent, [1,"static-header-component",{"startTime":[2,"start-time"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      StaticHeaderComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { StaticHeaderComponent, defineCustomElements };
