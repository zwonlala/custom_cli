const { exec, execSync } = require("child_process");

class Committer {
  static commit(file) {
    //0. check cur dir is git directory

    //1. check file is valid_
    //first) file is located at this dir
    //second) check file's located dir also

    //2. git add

    //3. git commit -m
    // git commit message is made by function
    const getCommitMessage = (file) => `Add ${file}`;

    const getGitAddCmdStr = (file) => `git add ${file}`;

    const getGitCommitCmdStr = `git commit -m "${getCommitMessage(file)}"`;

    // const addStdout = exec(
    //   `${getGitAddCmdStr(file)}`,
    //   (error, stdout, stderr) => {
    //     console.error(error);
    //     console.error(stdout);
    //     console.error(stderr);
    //   }
    // );

    // try {
    //   const addStdout = execSync(`${getGitAddCmdStr(file)}`);
    //   console.log(addStdout.toString());
    // } catch (e) {
    //   console.log(e.status);
    //   console.log(e.message);
    //   console.log(e.stderr);
    //   console.log(e.stdout);
    // }

    const addStdout = exec(
      `${getGitAddCmdStr(file)}`,
      (error, stdout, stderr) => {
        console.error(error); //null
        console.error(stdout); //""
        console.error(stderr); //""
      }
    );
    addStdout.on("exit", (code) => console.log(code)); //if success code value is 0

    //4. how to know git commit is succes?
  }
}

module.exports = Committer;
