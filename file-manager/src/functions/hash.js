import { createReadStream } from 'fs';
const { createHash, } = await import('crypto');
import { resolve } from "path";

export const getHash = async (args) => {
  if (args.length !== 1) {
    console.log("Invalid input");
    return;
  }
  try {
    const filePath = resolve(args[0]);
    console.log(filePath);
    await calculateHash(filePath);
  }
  catch (err) {
    console.log("Operation failed");
  }
}

async function calculateHash(filePath) {
  const hash = createHash('sha256');
  const input = createReadStream(filePath);
  input.on('readable', () => {
    const data = input.read();
    if (data)
      hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
  input.on('error', () => {
    console.log("Operation failed");
  })

};