import { cwd } from "process";
import fs from "fs/promises";

export const listFiles = async (args) => {
  if (args.length) {
    console.log("Invalid input");
  } else {
    await showTableList(cwd());
  }
}

async function showTableList(currentPath) {
  try {
    const arrayDirObjects = await fs.readdir(currentPath, { withFileTypes: true });
    const arrayTableObjects = arrayDirObjects.map((obj) => {
      const Name = obj.name;
      if (obj.isFile()) {
        return { Name, Type: "file" };
      }
      return { Name, Type: "directory" };
    });

    arrayTableObjects.sort((a, b) => a.Type.localeCompare(b.Type));
    console.log(arrayTableObjects);
    console.table(arrayTableObjects);
  } catch (error) {
    console.log("Operation failed");
  }
};
