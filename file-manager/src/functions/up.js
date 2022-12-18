import { chdir } from "process";

export const moveUp = async (args) => {
  if (args.length) {
    console.log("Invalid input");
  } else {
    chdir('..');
  }
}