import { Component, Prop, h } from '@stencil/core';
export class DefaultComponent {
  render() {
    return h("div", null, "Default StencilJS component");
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
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The first name"
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The middle name"
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The last name"
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
}
