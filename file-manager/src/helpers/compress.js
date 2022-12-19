import { basename, resolve } from "path";
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
  createReadStream,
  createWriteStream
} from 'fs';

export const compress = async (sourceFile, destPath) => {
  const fileName = basename(sourceFile) + '.zp';
  const destFile = resolve(destPath, fileName);
  console.log(sourceFile);
  console.log(destPath);

  const gzip = createGzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(destFile);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("Operation failed");
      process.exitCode = 1;
    }
    else {
      console.log('Compress successful');
    }
  });

};