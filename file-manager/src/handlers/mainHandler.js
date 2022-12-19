import { EOL } from "os";
import { cwd } from "process";
import {
  moveUp, changeDir, listFiles, getOsInfo,
  getHash, handleZip, readFile, createFile,
  renameFile, copyFile, removeFile, moveFile
} from '../functions/index.js'

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

    case "rm":
      await removeFile(args);
      break;

    case "mv":
      await moveFile(args);
      break;

    default:
      console.log("Invalid input");
      break;
  }
  console.log(`You are currently in ${cwd()}${EOL}`);
}




