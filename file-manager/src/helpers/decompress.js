import { basename, resolve } from "path";
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import {
  createReadStream,
  createWriteStream
} from 'fs';

export const decompress = async (sourceFile, destPath) => {
  const fileName = basename(sourceFile).replace(".zp", "");
  const destFile = resolve(destPath, fileName);

  const unzip = createUnzip();
  const source = createReadStream(sourceFile);
  const destination = createWriteStream(destFile, { flags: "wx" });

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("Operation failed");
      process.exitCode = 1;
    }
    else {
      console.log('Decompress successful');
    }
  });

};