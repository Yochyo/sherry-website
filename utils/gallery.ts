import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/images/gallery');

export function getGallery() {
  const fileNames = fs.readdirSync(postsDirectory);
  return {
    fileNames,
  };
}
