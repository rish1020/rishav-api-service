const { exec } = require("child_process");
const { v1 } = require("uuid");

async function transpileTypescript() {
  return new Promise((resolve, reject) => {
    const command = "npx tsc";
    console.log("Running command", command);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        resolve(false);
      } else {
        console.log("stdout", stdout);
        console.log("stderr", stderr);
        resolve(true);
      }
    });
  });
}

async function pushToGit() {
  const command = "git push origin main";
  console.log("Running command", command);
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        resolve(false);
      } else {
        console.log("stdout", stdout);
        console.log("stderr", stderr);
        resolve(true);
      }
    });
  });
}

async function performAction() {
  const tscResult = await transpileTypescript();
  if (tscResult) {
    await pushToGit();
  }
}

performAction();
