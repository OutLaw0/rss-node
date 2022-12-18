import { chdir } from "process";
import { homedir } from "os";
import { handleInput } from "./handlers/inputHandler.js";

const name = parseArgs();

console.log(`Welcome to the File Manager, ${name}!`);
chdir(homedir());
console.log(`You are currently in ${homedir()}`);
handleInput(name);

export function parseArgs() {
  const arrArgv = process.argv.slice(2);
  if (arrArgv.length) {
    const name = arrArgv[0].split("=")[1];
    if (name) {
      return name;
    }
  }
  return "Username";
};