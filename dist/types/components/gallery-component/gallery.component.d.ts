import { GalleryEntry } from './models/gallery-entry.interface';
export declare class GalleryComponent {
  galleryEntries: GalleryEntry[];
  startTime: number;
  loadGallery(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
  componentDidRender(): void;
}
