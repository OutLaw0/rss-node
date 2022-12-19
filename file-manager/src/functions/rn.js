import fs from 'fs';
import { cwd } from "process";
import { resolve, dirname } from "path";

export const renameFile = async (args) => {

  if (args.length !== 2) {
    console.log("Invalid input");
  } else {
    const filePath = resolve(cwd(), args[0]);
    const newfilePath = resolve(dirname(filePath), args[1]);

    fs.stat(newfilePath, (err) => {
      if (err) {
        fs.rename(filePath, newfilePath, (error) => {
          if (error) console.log("Operation failed");
        })
      }
      else { console.log("Operation failed"); }
    })
  }
}
