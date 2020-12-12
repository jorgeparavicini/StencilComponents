import { Component, h } from '@stencil/core';
export class DefaultComponent {
  render() {
    return (h("div", { class: "header" },
      h("form", { role: "search", class: "search" },
        h("input", { id: "search", type: "search", placeholder: "Search...", class: "search__input", autofocus: true, required: true })),
      h("nav", { class: "nav" },
        h("a", { href: "/home", class: "nav__label" }, "Home"),
        h("a", { href: "/gallery", class: "nav__label" }, "Gallery"))));
  }
  static get is() { return "static-header-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["static-header.component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["static-header.component.css"]
  }; }
}
