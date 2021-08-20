const { execSync } = require("child_process");

class Committer {
  static commit(file) {
    //1. check file is valid_
    //first) file is located at this dir
    //second) check file's located dir also

    //2. git add

    //3. git commit -m
    // git commit message is made by function
    const getCommitMessage = (file) => `Add ${file}`;

    const getGitAddCmdStr = (file) => `git add ${file}`;

    const getGitCommitCmdStr = `git commit -m "${getCommitMessage(file)}"`;

    //4. how to know git commit is succes?
  }
}
