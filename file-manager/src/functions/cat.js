import fs from 'fs';
import { cwd } from "process";
import { resolve } from "path";

export const readFile = async (args) => {
  if (args.length !== 1) {
    console.log("Invalid input");
  } else {
    const filePath = resolve(cwd(), args[0]);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log("Operation failed");
      }
      else {
        console.log(data);
      }
    })
  }
}