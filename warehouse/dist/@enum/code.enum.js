"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMap = void 0;
const common_1 = require("@nestjs/common");
const error_enum_1 = require("./error.enum");
exports.CodeMap = {
    [String(common_1.HttpStatus.INTERNAL_SERVER_ERROR)]: [error_enum_1.ErrorEnum.UNPROCESSED],
};
//# sourceMappingURL=code.enum.js.map