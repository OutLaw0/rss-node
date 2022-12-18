import { chdir } from "process";

export const changeDir = async (args) => {
  if (args.length !== 1) {
    console.log("Invalid input");
  } else {
    try {
      chdir(args[0]);
    } catch (error) {
      console.log("Operation failed");
    }
  }
}