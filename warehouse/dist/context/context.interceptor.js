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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const context_1 = require("./context");
let ContextInterceptor = class ContextInterceptor {
    intercept(ctx, next) {
        const request = ctx.switchToHttp().getRequest();
        this.context.setRequest(request);
        return next.handle().pipe(operators_1.tap({
            next: () => this.context.success(),
            error: () => this.context.error(),
        }));
    }
};
__decorate([
    common_1.Inject(context_1.Context),
    __metadata("design:type", context_1.Context)
], ContextInterceptor.prototype, "context", void 0);
ContextInterceptor = __decorate([
    common_1.Injectable()
], ContextInterceptor);
exports.ContextInterceptor = ContextInterceptor;
//# sourceMappingURL=context.interceptor.js.map