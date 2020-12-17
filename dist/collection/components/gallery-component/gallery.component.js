import { Component, h, Prop } from '@stencil/core';
const URL = 'https://raw.githubusercontent.com/jorgeparavicini/StencilJS-Angular/GalleryComponent/Angular/src/assets/gallery_db.json';
export class GalleryComponent {
  constructor() {
    this.startTime = 0;
  }
  async loadGallery() {
    const response = await fetch(URL);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    this.galleryEntries = await response.json();
  }
  componentDidLoad() {
    this.loadGallery();
  }
  render() {
    if (this.galleryEntries) {
      return (h("div", { class: "page__content" }, this.galleryEntries.map((entry) => (h("div", { class: "entry" },
        h("img", { src: entry.imageUrl }),
        h("p", null, entry.imageDescription))))));
    }
  }
  componentDidRender() {
    if (this.galleryEntries) {
      console.log(`Render Time: ${performance.now() - this.startTime}`);
    }
  }
  static get is() { return "gallery-component"; }
  static get originalStyleUrls() { return {
    "$": ["./gallery.component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gallery.component.css"]
  }; }
  static get properties() { return {
    "galleryEntries": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "GalleryEntry[]",
        "resolved": "GalleryEntry[]",
        "references": {
          "GalleryEntry": {
            "location": "import",
            "path": "./models/gallery-entry.interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
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
