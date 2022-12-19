import readline from "readline/promises";
import { EOL } from "os";
import { cwd, stdin, stdout, exit, nextTick } from "process";
import { handleCommand } from "./mainHandler.js";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

export const handleInput = (name) => {
  rl.on("line", async (line) => {
    line = line.trim();
    if (line === ".exit") {
      rl.emit("SIGINT");
      return
    }
    await handleCommand(line);
  });
  rl.on("SIGINT", () => {
    rl.close();
  });
  rl.on("close", () => {
    console.log(`${EOL}Thank you for using File Manager, ${name}, goodbye!`);
    nextTick(() => exit());
  })
}
