const { execSync } = require("child_process");

class DirectoryChecker {
  static isExisted(directoryPath) {
    const EXISTED = 1;

    const dirs = directoryPath.split("/");
    // todo: 모든 디렉토리 표현식(. ~ / ...)에 대해 처리할 수 있는 로직인지 테스트해보기
    const directory = dirs.pop();
    const path = dirs.join("/");
    // console.log(`<${path}><${directory}>`);

    // find /Users/songjiwon/Desktop -maxdepth 1 -name "custom_cli" | wc -l
    let stdout = execSync(
      `find ${path} -maxdepth 1 -name "${directory}" | wc -l`
    );

    return Number(stdout) == EXISTED;
  }
}

module.exports = DirectoryChecker;
