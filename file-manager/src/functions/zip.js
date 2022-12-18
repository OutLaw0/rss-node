import { resolve } from "path";
import { cwd } from "process";
import { compress } from "../helpers/compress.js";
import { decompress } from "../helpers/decompress.js";

export const handleZip = async (command, args) => {
  if (args.length !== 2) {
    console.log("Invalid input");
    return;
  }
  const sourceFile = resolve(cwd(), args[0]);
  const destPath = resolve(cwd(), args[1]);

  switch (command) {
    case "compress":
      await compress(sourceFile, destPath);
      break;

    case "decompress":
      await decompress(sourceFile, destPath);
      break;

    default:
      break;
  }
}