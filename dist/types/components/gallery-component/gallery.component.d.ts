import { GalleryEntry } from './models/gallery-entry.interface';
export declare class GalleryComponent {
  galleryEntries: GalleryEntry[];
  loadGallery(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
