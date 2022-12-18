import { moveUp } from "../functions/up.js";
import { changeDir } from "../functions/cd.js";
import { listFiles } from "../functions/ls.js";
import { getOsInfo } from "../functions/os.js";

export const handleCommand = async (data) => {
  const input = data.split(" ");
  const [command, ...args] = input;

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

    default:
      console.log("Invalid input");
      break;
  }
}




