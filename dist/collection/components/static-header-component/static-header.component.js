import { Component, h } from '@stencil/core';
export class DefaultComponent {
  render() {
    return (h("div", { class: "header" },
      h("form", { onsubmit: "event.preventDefault();", role: "search", class: "search" },
        h("label", { for: "search", class: "search__label" }, "Search"),
        h("input", { id: "search", type: "search", placeholder: "Search...", class: "search__input", autofocus: true, required: true })),
      h("nav", { class: "nav" },
        h("a", { href: "", class: "nav__label" }, "Home"),
        h("a", { href: "", class: "nav__label" }, "Gallery"),
        h("a", { href: "", class: "nav__label" }, "Team"),
        h("a", { href: "", class: "nav__label" }, "Contact"))));
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
