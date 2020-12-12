import { Component, h, Prop } from '@stencil/core';
import { GalleryEntry } from './models/gallery-entry.interface';

const URL = 'https://raw.githubusercontent.com/jorgeparavicini/StencilJS-Angular/GalleryComponent/Angular/src/assets/gallery_db.json';

@Component({
  tag: 'gallery-component',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Prop() galleryEntries: GalleryEntry[];

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
      return (
        <div class="page__content">
          {this.galleryEntries.map((entry: GalleryEntry) => (
            <div class="entry">
              <img src={entry.imageUrl} />
              <p>{entry.imageDescription}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
