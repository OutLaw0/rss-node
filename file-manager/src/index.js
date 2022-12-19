import { chdir, argv } from "process";
import { homedir } from "os";
import { handleInput } from "./handlers/inputHandler.js";

const name = getName();

console.log(`Welcome to the File Manager, ${name}!`);
chdir(homedir());
console.log(`You are currently in ${homedir()}`);
handleInput(name);

function getName() {
  const arrArgv = argv.slice(2);
  if (arrArgv.length) {
    const name = arrArgv[0].split("=")[1];
    if (name) {
      return name;
    }
  }
  return "Username";
};