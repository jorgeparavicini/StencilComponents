import { r as registerInstance, h } from './index-04d084f4.js';

const galleryComponentScss = ".page__content{max-width:1000px;display:flex;flex-flow:wrap row;justify-content:space-between;margin:auto;margin-top:16px;margin-bottom:16px}.entry{width:30%}.entry img{object-fit:contain;width:100%;box-shadow:0 2px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(.25,.8,.25,1)}.entry img:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)}.entry p{text-align:center}";

const URL = 'https://raw.githubusercontent.com/jorgeparavicini/StencilJS-Angular/GalleryComponent/Angular/src/assets/gallery_db.json';
const GalleryComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async loadGallery() {
    const response = await fetch(URL);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    console.log("Fetched");
    this.galleryEntries = await response.json();
  }
  componentDidLoad() {
    this.loadGallery();
  }
  render() {
    if (this.galleryEntries) {
      console.log("ogeh");
      return (h("div", { class: "page__content" }, this.galleryEntries.map((entry) => (h("div", { class: "entry" }, h("img", { src: entry.imageUrl }), h("p", null, entry.imageDescription))))));
    }
  }
};
GalleryComponent.style = galleryComponentScss;

export { GalleryComponent as gallery_component };
