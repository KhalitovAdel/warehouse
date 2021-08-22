"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodesHelper = void 0;
const common_1 = require("@nestjs/common");
const code_enum_1 = require("../@enum/code.enum");
class CodesHelper {
    static getCode(code) {
        for (const codeKey of Object.keys(code_enum_1.CodeMap)) {
            if (code_enum_1.CodeMap[codeKey].includes(code)) {
                return parseInt(codeKey);
            }
        }
    }
    static get(code) {
        var _a;
        return (_a = this.getCode(code)) !== null && _a !== void 0 ? _a : common_1.HttpStatus.BAD_REQUEST;
    }
}
exports.CodesHelper = CodesHelper;
//# sourceMappingURL=http-exception.helper.js.map