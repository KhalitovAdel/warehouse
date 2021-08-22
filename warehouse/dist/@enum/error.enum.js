"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInputDescription = exports.ErrorEnum = void 0;
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["UNPROCESSED"] = 0] = "UNPROCESSED";
    ErrorEnum[ErrorEnum["NOT_NULL_EXPECTED"] = 1] = "NOT_NULL_EXPECTED";
    ErrorEnum[ErrorEnum["INVALID_INPUT"] = 2] = "INVALID_INPUT";
    ErrorEnum[ErrorEnum["INVALID_CREDENTIALS"] = 3] = "INVALID_CREDENTIALS";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
var ErrorInputDescription;
(function (ErrorInputDescription) {
    ErrorInputDescription[ErrorInputDescription["UNIQUE_FIELD"] = 0] = "UNIQUE_FIELD";
    ErrorInputDescription[ErrorInputDescription["DUPLICATE_TYPE"] = 1] = "DUPLICATE_TYPE";
})(ErrorInputDescription = exports.ErrorInputDescription || (exports.ErrorInputDescription = {}));
//# sourceMappingURL=error.enum.js.map