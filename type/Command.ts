enum Command {
  //git
  GIT_ADD = "git add",
  GIT_COMMIT = "git commit",
  GIT_PUSH = "git push",

  //git commit message
  COMMIT_MESSAGE = "ADD",

  //find
  FIND = "find",
}

namespace Command {
  export function getCommitAddCmdStr(file: string): string {
    return `${Command.GIT_ADD} ${file}`;
  }

  function getCommitMsgStr(file: string): string {
    return `${Command.COMMIT_MESSAGE} ${file}`;
  }

  export function getCommitCmdStr(file: string): string {
    return `${Command.GIT_COMMIT} -m ${getCommitMsgStr(file)}`;
  }

  export function getCommitPushCmdStr(): string {
    return Command.GIT_PUSH;
  }

  export function getFindCmdStr(path: string, directory: string): string {
    return `${Command.FIND} ${path} -maxdepth 1 -name "${directory}" | wc -l`;
  }

  export function getCmdStr(
    cmd: Command,
    file?: string,
    path?: string,
    directory?: string
  ): string {
    switch (cmd) {
      case Command.GIT_PUSH: // git push
        return String(cmd);
      case Command.GIT_ADD: // git add FILE_NAME
      case Command.COMMIT_MESSAGE: // ADD FILE_NAME
        return `${cmd} ${file}`;
      case Command.GIT_COMMIT: // git commit -m 'ADD FILE_NAME'
        return `${cmd} -m ${getCmdStr(Command.COMMIT_MESSAGE, file)}`;
      case Command.FIND: // find /Users/songjiwon/Desktop -maxdepth 1 -name "custom_cli" | wc -l
        return `${cmd} ${path} -maxdepth 1 -name "${directory}" | wc -l`;
      default:
        throw new Error("Unexpected Command Type");
    }
  }
}

export default Command;
