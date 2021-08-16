// import fs from "fs";
const fs = require("fs");

class FileMaker {
  static createFile = (name, format, content) => {
    const FILE_FORMAT_MAP = new Map()
      .set("python", "py")
      .set("javascript", "js")
      .set("c", "c")
      .set("cpp", "cpp");

    const getFileFormat = (format) => {
      switch (format) {
        case "python":
        case "javascript":
        case "c":
        case "cpp":
          return FILE_FORMAT_MAP.get(format);
        default:
          return "txt";
      }
    };

    const errorCallback = (error) => {
      if (error) throw error;
      console.log("File is created successfully");
    };

    fs.writeFile(`${name}.${getFileFormat(format)}`, content, errorCallback);
  };
}

module.exports = FileMaker;
