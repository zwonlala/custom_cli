// import fs from "fs";
const fs = require("fs");

class FileMaker {
  static createFile = (name, path, format, content) => {
    const FILE_FORMAT_MAP = new Map()
      .set("python", "py")
      .set("javascript", "js")
      .set("c", "c")
      .set("cpp", "cpp");

    const getFileFormat = (format) => {
      return Boolean(FILE_FORMAT_MAP.get(format))
        ? FILE_FORMAT_MAP.get(format)
        : "txt";
      /**
       * if i can use 'Nullish coalescing operator'
       * the code above can replaced by next code
       */
      // return FILE_FORMAT_MAP.get(format) ?? "txt";
    };

    const errorCallback = (error) => {
      if (error) throw error;
      console.log("File is created successfully");
    };

    fs.writeFile(
      `${path}/${name}.${getFileFormat(format)}`,
      content,
      errorCallback
    );
  };
}

module.exports = FileMaker;
