import { Component, Prop, h } from '@stencil/core';
export class DefaultComponent {
  constructor() {
    this.startTime = 0;
  }
  render() {
    return h("div", null, "Default StencilJS component");
  }
  componentDidRender() {
    console.log(`Render Time: ${performance.now() - this.startTime}`);
  }
  static get is() { return "default-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["default-component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["default-component.css"]
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
