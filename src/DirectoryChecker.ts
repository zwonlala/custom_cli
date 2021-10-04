import { execSync } from "child_process";

export default class DirectoryChecker {
  static isExisted(directoryPath: string): boolean {
    const EXISTED: number = 1;

    const dirs: string[] = directoryPath.split("/");
    // todo: 모든 디렉토리 표현식(. ~ / ...)에 대해 처리할 수 있는 로직인지 테스트해보기
    const directory: string = dirs.pop();
    const path: string = dirs.join("/");
    // console.log(`<${path}><${directory}>`);

    // find /Users/songjiwon/Desktop -maxdepth 1 -name "custom_cli" | wc -l
    const stdout: Buffer = execSync(
      `find ${path} -maxdepth 1 -name "${directory}" | wc -l`
    );

    return Number(stdout) == EXISTED;
  }
}
