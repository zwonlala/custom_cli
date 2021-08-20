const { exec } = require("child_process");

class Committer {
  static commit(file) {
    //0. check cur dir is git directory

    //1. check file is valid_
    //first) file is located at this dir
    //second) check file's located dir also

    //2. git add
    const getGitAddCmdStr = (file) => `git add ${file}`;

    const addStdout = exec(
      `${getGitAddCmdStr(file)}`,
      (error, stdout, stderr) => {
        console.error(error);
        console.error(stdout);
        console.error(stderr);
      }
    );
    addStdout.on("exit", (code) => console.log(code)); //if success code value is 0

    //3. git commit -m
    const getCommitMessage = (file) => `Add ${file}`;
    const getGitCommitCmdStr = `git commit -m "${getCommitMessage(file)}"`;

    const commitStdout = exec(getGitCommitCmdStr);
    commitStdout.on("exit", (code) => console.log(code)); //if success code value is 0

    //4. how to know git commit is succes?
  }
}

module.exports = Committer;
