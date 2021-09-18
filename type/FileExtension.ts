enum FileExtension {
  PYTHON = "PYTHON",
  JAVASCRIPT = "JAVASCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  C = "C",
  CPP = "CPP",
}

namespace FileExtension {
  const FileExtensionNameMap: Map<FileExtension, string> = new Map<
    FileExtension,
    string
  >()
    .set(FileExtension.PYTHON, "py")
    .set(FileExtension.JAVASCRIPT, "js")
    .set(FileExtension.TYPESCRIPT, "ts")
    .set(FileExtension.C, "c")
    .set(FileExtension.CPP, "cpp");

  const DEFAULT_FILE_EXTENSION_STR: string = "txt";

  export function getFileExtensionStr(fileExtension: FileExtension): string {
    return (
      FileExtensionNameMap.get(fileExtension) || DEFAULT_FILE_EXTENSION_STR
    );
  }
}

export default FileExtension;
