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
exports.Transaction = void 0;
const common_1 = require("@nestjs/common");
const namespace_enum_1 = require("../@enum/namespace.enum");
const context_1 = require("../context/context");
let Transaction = class Transaction {
    constructor(ctx, queryRunner) {
        this.ctx = ctx;
        this.queryRunner = queryRunner;
    }
    async commit() {
        var _a, _b;
        await ((_a = this.queryRunner) === null || _a === void 0 ? void 0 : _a.commitTransaction());
        await ((_b = this.queryRunner) === null || _b === void 0 ? void 0 : _b.release());
    }
    async rollback() {
        var _a, _b;
        await ((_a = this.queryRunner) === null || _a === void 0 ? void 0 : _a.rollbackTransaction());
        await ((_b = this.queryRunner) === null || _b === void 0 ? void 0 : _b.release());
    }
};
Transaction = __decorate([
    common_1.Injectable({ scope: common_1.Scope.REQUEST }),
    __param(0, common_1.Inject(common_1.forwardRef(() => context_1.Context))),
    __param(1, common_1.Inject(namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.TRANSACTION_RUNNER])),
    __metadata("design:paramtypes", [context_1.Context, Object])
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map