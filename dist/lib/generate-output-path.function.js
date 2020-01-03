"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var process_1 = require("process");
var file_type_enum_1 = require("./file-type.enum");
exports.generateOutputPath = function (filename, params) {
    var name = path_1.parse(filename).name;
    var imageType = (params && params.type) ? params.type : file_type_enum_1.FileType.PNG;
    var path = (params && params.path) ? params.path : process_1.cwd();
    var prefix = (params && params.prefix) ? params.prefix : "";
    var postfix = (params && params.postfix) ? params.postfix : "";
    return path_1.join(path, "" + prefix + name + postfix + imageType);
};
