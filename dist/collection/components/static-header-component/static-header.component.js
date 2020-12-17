import { Component, h, Prop } from '@stencil/core';
export class DefaultComponent {
  constructor() {
    this.startTime = 0;
  }
  render() {
    return (h("div", { class: "header" },
      h("form", { role: "search", class: "search" },
        h("input", { id: "search", type: "search", placeholder: "Search...", class: "search__input", autofocus: true, required: true })),
      h("nav", { class: "nav" },
        h("a", { href: "/home", class: "nav__label" }, "Home"),
        h("a", { href: "/gallery", class: "nav__label" }, "Gallery"))));
  }
  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
  static get is() { return "static-header-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["static-header.component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["static-header.component.css"]
  }; }
  static get properties() { return {
    "startTime": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "start-time",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
}
