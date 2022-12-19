import { EOL, homedir, userInfo, arch, cpus } from "os";

export const getOsInfo = (args) => {

  if (args.length !== 1) {
    console.log("Invalid input");
    return;
  }

  switch (args[0]) {
    case "--EOL":
      console.log({ EOL });
      break;

    case "--cpus":
      const cpuInfo = cpus().map(({ model, speed }) => {
        return { model, speed: speed / 1000 + "GHz" };
      })
      console.log(cpuInfo);
      break;

    case "--homedir":
      console.log({ homedir: homedir() });
      break;

    case "--username":
      const { username } = userInfo();
      console.log({ username });
      break;

    case "--architecture":
      console.log({ architecture: arch() });
      break;

    default:
      console.log("Invalid input");
      break;
  }
}

