"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_enum_1 = require("../@enum/error.enum");
const error_default_1 = require("../error.default");
const http_exception_helper_1 = require("./http-exception.helper");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const error = exception instanceof error_default_1.ErrorDefault ? exception : new error_default_1.ErrorDefault();
        const status = http_exception_helper_1.CodesHelper.get(error.code);
        const data = error.data || null;
        return response.status(status).json({
            data,
            code: error_enum_1.ErrorEnum[error.code],
            statusCode: status,
            timestamp: new Date().toISOString(),
        });
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map