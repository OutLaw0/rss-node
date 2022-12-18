import readline from "readline/promises";
import { EOL } from "os";

import { cwd, stdin, stdout, exit } from "process";
import { handleCommand } from "./mainHandler.js";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

export const handleInput = (name) => {
  rl.on("line", async (data) => {
    data = data.trim();
    if (data === ".exit") {
      rl.emit("SIGINT");
    } else {
      handleCommand(data);
      console.log(`${EOL}You are currently in ${cwd()}`);
    }
  });
  rl.on("SIGINT", () => {
    rl.close();
  });
  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${name}, goodbye!`);
    process.nextTick(() => exit());
  })
}
