"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_adapter_class_1 = require("./adapter/native.adapter.class");
var clipboard_class_1 = require("./clipboard.class");
jest.mock("./adapter/native.adapter.class");
beforeEach(function () {
    jest.resetAllMocks();
});
describe("Clipboard class", function () {
    it("should call the native adapters copy method.", function () {
        var adapterMock = new native_adapter_class_1.NativeAdapter();
        var SUT = new clipboard_class_1.Clipboard(adapterMock);
        var textToCopy = "bar";
        SUT.copy(textToCopy);
        expect(adapterMock.copy).toHaveBeenCalledTimes(1);
        expect(adapterMock.copy).toHaveBeenCalledWith(textToCopy);
    });
    it("should call the native adapters paste method.", function () {
        var adapterMock = new native_adapter_class_1.NativeAdapter();
        var SUT = new clipboard_class_1.Clipboard(adapterMock);
        SUT.paste();
        expect(adapterMock.paste).toHaveBeenCalledTimes(1);
    });
});
