"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDefault = void 0;
const error_enum_1 = require("./@enum/error.enum");
class ErrorDefault extends Error {
    constructor(code = error_enum_1.ErrorEnum.UNPROCESSED, data) {
        super(typeof data === 'string' ? data : undefined);
        this.code = code;
        this.data = data;
    }
}
exports.ErrorDefault = ErrorDefault;
//# sourceMappingURL=error.default.js.map