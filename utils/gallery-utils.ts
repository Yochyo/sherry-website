import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/images/gallery');

export class GalleryUtils {
  private static _gallery?: string[];
  static get gallery(): string[] {
    const g = this._gallery;
    if (g) return g;

    const fileNames = fs.readdirSync(postsDirectory);
    this._gallery = fileNames;
    return fileNames;
  }

  static files = () => this.gallery.map(it => ({ name: it, simpleName: it.substring(0, it.lastIndexOf('.')) }));
  static filesNames = () => this.gallery;
  static simpleFileNames = () => this.filesNames().map(it => it.substring(0, it.lastIndexOf('.')));
}
