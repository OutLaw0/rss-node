import fs from 'fs';
import { cwd } from "process";
import { resolve, dirname, basename } from "path";

export const copyFile = async (args) => {

  if (args.length !== 2) {
    console.log("Invalid input");
  } else {
    const filePath = resolve(cwd(), args[0]);
    const newfilePath = resolve(dirname(filePath), args[1], basename(filePath));

    fs.cp(filePath, newfilePath, { force: false, recursive: true, errorOnExist: true }, (err) => {
      if (err) console.log("Operation failed");
    })
  }
}