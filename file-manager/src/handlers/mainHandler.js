import { EOL } from "os";
import { cwd } from "process";
import { moveUp } from "../functions/up.js";
import { changeDir } from "../functions/cd.js";
import { listFiles } from "../functions/ls.js";
import { getOsInfo } from "../functions/os.js";
import { getHash } from "../functions/hash.js";
import { handleZip } from "../functions/zip.js";
import { readFile } from "../functions/cat.js";
import { createFile } from "../functions/add.js";
import { renameFile } from "../functions/rn.js";
import { copyFile } from "../functions/cp.js";

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

    case "cat":
      await readFile(args);
      break;

    case "add":
      await createFile(args);
      break;

    case "rn":
      await renameFile(args);
      break;

    case "cp":
      await copyFile(args);
      break;

    case "mv":
      await moveFile(args);
      break;

    case "rm":
      await removeFile(args);
      break;

    default:
      console.log("Invalid input");
      break;
  }
  console.log(`You are currently in ${cwd()}${EOL}`);
}




