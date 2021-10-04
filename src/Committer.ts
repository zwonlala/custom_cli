import { exec, ChildProcess } from "child_process";
import Command from "../type/Command";

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
    const addStdout: ChildProcess = exec(
      `${Command.getCmdStr(Command.GIT_ADD, file)}`,
      (error: Error, stdout: string, stderr: string) => {
        // console.error(error); //this value is 'null'
        // console.error(stdout); //this value is ''
        // console.error(stderr); //this value is ''
      }
    );
    addStdout.on("exit", (code: number) =>
      Committer.logger(code, Command.GIT_ADD)
    );

    //3. git commit -m
    const commitStdout: ChildProcess = exec(
      Command.getCmdStr(Command.GIT_COMMIT, file)
    );
    commitStdout.on("exit", (code: number) =>
      Committer.logger(code, Command.GIT_COMMIT)
    );

    //4. how to know git commit is succes?
  }

  static push(): void {
    const pushStdout: ChildProcess = exec(Command.GIT_PUSH);
    pushStdout.on("exit", (code: number) =>
      Committer.logger(code, Command.GIT_PUSH)
    );
  }
}
