// import fs from "fs";
const fs = require("fs");

export default class FileMaker {
  static createFile = (
    name: string,
    path: string,
    format: string,
    content: string,
    callback: () => void
  ) => {
    const FILE_FORMAT_MAP: Map<string, string> = new Map()
      .set("python", "py")
      .set("javascript", "js")
      .set("c", "c")
      .set("cpp", "cpp");

    const getFileFormat = (format: string) => {
      return Boolean(FILE_FORMAT_MAP.get(format))
        ? FILE_FORMAT_MAP.get(format)
        : "txt";
      /**
       * if i can use 'Nullish coalescing operator'
       * the code above can replaced by next code
       */
      // return FILE_FORMAT_MAP.get(format) ?? "txt";
    };

    const errorCallback = (error: Error) => {
      if (error) throw error;
      console.log("File is created successfully");
      console.log("run callback func");
      callback();
    };

    fs.writeFile(
      `${path}/${name}.${getFileFormat(format)}`,
      content,
      errorCallback
    );
  };
}
