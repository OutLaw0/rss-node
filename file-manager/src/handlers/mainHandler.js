import { moveUp } from "../functions/up.js";
import { changeDir } from "../functions/cd.js";
import { listFiles } from "../functions/ls.js";
import { getOsInfo } from "../functions/os.js";
import { getHash } from "../functions/hash.js";
import { handleZip } from "../functions/zip.js";

export const handleCommand = async (line) => {
  const lineArr = line.split(" ");
  const [command, ...args] = lineArr;

  switch (command) {
    case "up":
      moveUp(args);
      break;

    case "cd":
      changeDir(args);
      break;

    case "ls":
      listFiles(args);
      break;

    case "os":
      getOsInfo(args);
      break;

    case "hash":
      await getHash(args);
      break;

    case "compress":
      await handleZip(command, args);
      break;

    case "decompress":
      await handleZip(command, args);
      break;

    default:
      console.log("Invalid input");
      break;
  }
}




