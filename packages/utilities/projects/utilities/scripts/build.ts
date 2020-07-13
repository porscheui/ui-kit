import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { CDN_BASE_URL, FONTS_MANIFEST } from '@porsche-design-system/fonts';
import { buildStyles } from './styles';

const checkIfDirectoryExists = async (path: string): Promise<boolean> => {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const createGlobalCSS = async (files: string[]): Promise<void> => {
  if (await checkIfDirectoryExists(path.resolve('./dist'))) {
    await fs.promises.rmdir(path.resolve('./dist'), { recursive: true });
  }
  fs.mkdirSync(path.resolve('./dist/global-css'), { recursive: true });

  buildStyles({
    baseUrl: 'http://localhost:3001/fonts',
    fontsManifest: FONTS_MANIFEST,
    addContentBasedHash: false
  });

  const fontFaceFileNameCdn = buildStyles({
    baseUrl: CDN_BASE_URL,
    fontsManifest: FONTS_MANIFEST,
    addContentBasedHash: true
  });

  const targetFile = path.normalize('./src/js/index.ts');
  const separator = '\n/* Auto Generated Below */';

  const oldContent = fs.readFileSync(targetFile, 'utf8');
  const newContent = `${oldContent.substr(
    0,
    oldContent.indexOf(separator) > 0 ? oldContent.indexOf(separator) : undefined
  )}${separator}

export const FONT_FACE_CSS_NAME = "${fontFaceFileNameCdn}";`;

  fs.writeFileSync(targetFile, newContent);
};

(async (): Promise<void> => {
  const files = await globby('./src/**/*.@(woff|woff2)');

  await createGlobalCSS(files).catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
