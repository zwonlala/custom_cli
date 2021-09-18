import fs from "fs";
import FileExtension from "../type/FileExtension";

export default class FileMaker {
  static createFile = (
    name: string,
    path: string,
    extension: FileExtension,
    content: string,
    callback: () => void
  ) => {
    const errorCallback = (error: NodeJS.ErrnoException | null) => {
      if (error) throw error;
      console.log("File is created successfully");
      console.log("run callback func");
      callback();
    };

    fs.writeFile(
      `${path}/${name}.${FileExtension.getFileExtensionStr(extension)}`,
      content,
      errorCallback
    );
  };
}
