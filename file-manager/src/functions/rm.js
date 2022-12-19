import fs from 'fs';
import { cwd } from "process";
import { resolve } from "path";

export const removeFile = async (args) => {

  if (args.length !== 1) {
    console.log("Invalid input");
  } else {
    const filePath = resolve(cwd(), args[0]);
    fs.unlink(filePath, (err) => {
      if (err) console.log("Operation failed");
    })
  }
}
