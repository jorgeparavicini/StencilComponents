'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c10ea6d.js');

const staticHeaderComponentScss = ".header{display:flex;flex-flow:nowrap row;background-color:#2f2f2f;padding:1rem}.search{position:relative;border-radius:15%;flex:1 0 auto;margin-right:3rem}.search__label{display:none}.search__input{outline:0;width:100%;height:3rem;border-radius:0.5rem;padding:0 1rem;appearance:none;border:0}.nav{display:flex;flex-flow:nowrap row;align-items:center}.nav__label{margin-left:2rem;font-size:1.3rem;letter-spacing:0.15rem;text-transform:uppercase;text-decoration:none;color:#ccc;font-weight:lighter;transition:all 0.2s ease;display:inline-block;position:relative;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}.nav__label::after{background:none repeat scroll 0 0 transparent;bottom:0;content:\"\";bottom:-3px;height:1px;left:50%;position:absolute;background:#fff;transition:width 0.3s ease 0s, left 0.3s ease 0s;width:0}.nav__label:hover{color:white}.nav__label:hover::after{width:100%;left:0}";

const DefaultComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "header" }, index.h("form", { onsubmit: "event.preventDefault();", role: "search", class: "search" }, index.h("label", { for: "search", class: "search__label" }, "Search"), index.h("input", { id: "search", type: "search", placeholder: "Search...", class: "search__input", autofocus: true, required: true })), index.h("nav", { class: "nav" }, index.h("a", { href: "", class: "nav__label" }, "Home"), index.h("a", { href: "", class: "nav__label" }, "Gallery"), index.h("a", { href: "", class: "nav__label" }, "Team"), index.h("a", { href: "", class: "nav__label" }, "Contact"))));
  }
};
DefaultComponent.style = staticHeaderComponentScss;

exports.static_header_component = DefaultComponent;
