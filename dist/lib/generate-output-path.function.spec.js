"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var process_1 = require("process");
var file_type_enum_1 = require("./file-type.enum");
var generate_output_path_function_1 = require("./generate-output-path.function");
describe("generate-output-path", function () {
    it("should default to a PNG file without pre- or postfix in the current directory", function () {
        // GIVEN
        var filename = "asdf";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(process_1.cwd(), "" + filename + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename);
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should should allow to add a prefix to the filename", function () {
        // GIVEN
        var filename = "asdf";
        var pre = "foo_";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(process_1.cwd(), "" + pre + filename + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, { prefix: pre });
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should should allow to add a postfix to the filename", function () {
        // GIVEN
        var filename = "asdf";
        var post = "_bar";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(process_1.cwd(), "" + filename + post + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, { postfix: post });
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should should allow to add both a prefix and a postfix to the filename", function () {
        // GIVEN
        var filename = "asdf";
        var pre = "foo_";
        var post = "_bar";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(process_1.cwd(), "" + pre + filename + post + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, {
            postfix: post,
            prefix: pre,
        });
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should should allow to configure the file path", function () {
        // GIVEN
        var filename = "asdf";
        var filepath = "/foo/test/bar";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(filepath, "" + filename + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, {
            path: filepath,
        });
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should handle relative file path", function () {
        // GIVEN
        var filename = "asdf";
        var filepath = "/foo/../bar";
        var ext = file_type_enum_1.FileType.PNG;
        var expectedPath = path_1.join(filepath, "" + filename + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, {
            path: filepath,
        });
        // THEN
        expect(result).toEqual(expectedPath);
    });
    it("should handle different file types", function () {
        // GIVEN
        var filename = "asdf";
        var ext = file_type_enum_1.FileType.JPG;
        var expectedPath = path_1.join(process_1.cwd(), "" + filename + ext);
        // WHEN
        var result = generate_output_path_function_1.generateOutputPath(filename, {
            type: file_type_enum_1.FileType.JPG
        });
        // THEN
        expect(result).toEqual(expectedPath);
    });
});
