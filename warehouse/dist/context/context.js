"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const common_1 = require("@nestjs/common");
const error_enum_1 = require("../@enum/error.enum");
const transaction_1 = require("../database/transaction");
const error_default_1 = require("../error.default");
let Context = class Context {
    constructor(_transaction) {
        this._transaction = _transaction;
    }
    get isTransactionRequest() {
        return !!this.request;
    }
    setUser(user) {
        this.user = user;
    }
    setRequest(request) {
        if (this.request)
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.INVALID_INPUT, {
                request: error_enum_1.ErrorInputDescription[error_enum_1.ErrorInputDescription.DUPLICATE_TYPE],
            });
        console.log('Request init');
        this.request = request;
    }
    async success() {
        await this._transaction.commit();
    }
    async error() {
        await this._transaction.rollback();
    }
};
Context = __decorate([
    common_1.Injectable({ scope: common_1.Scope.REQUEST }),
    __param(0, common_1.Inject(common_1.forwardRef(() => transaction_1.Transaction))),
    __metadata("design:paramtypes", [transaction_1.Transaction])
], Context);
exports.Context = Context;
//# sourceMappingURL=context.js.map