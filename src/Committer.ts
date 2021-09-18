const { exec } = require("child_process");

export default class Committer {
  static logger = (code: number, command: string) =>
    //if success code value is 0
    code === 0
      ? console.log(`'${command}' command is successed. with exit code:${code}`)
      : console.error(`'${command}' command is failed. with exit code:${code}`);

  static commit(file: string): void {
    //0. check cur dir is git directory

    //1. check file is valid_
    //first) file is located at this dir
    //second) check file's located dir also

    //2. git add
    const getGitAddCmdStr = (file: string) => `git add ${file}`;

    const addStdout = exec(
      `${getGitAddCmdStr(file)}`,
      (error: Error, stdout: string, stderr: string) => {
        // console.error(error); //this value is 'null'
        // console.error(stdout); //this value is ''
        // console.error(stderr); //this value is ''
      }
    );
    addStdout.on("exit", (code: number) => Committer.logger(code, "git add"));

    //3. git commit -m
    const getCommitMessage = (file: string) => `Add ${file}`;
    const getGitCommitCmdStr = `git commit -m "${getCommitMessage(file)}"`;

    const commitStdout = exec(getGitCommitCmdStr);
    commitStdout.on("exit", (code: number) =>
      Committer.logger(code, "git commit")
    );

    //4. how to know git commit is succes?
  }

  static push(): void {
    const gitPushCmdStr = "git push";

    const pushStdout = exec(gitPushCmdStr);
    pushStdout.on("exit", (code: number) => Committer.logger(code, "git push"));
  }
}
