"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const context_1 = require("./context");
let ContextModule = class ContextModule {
};
ContextModule = __decorate([
    common_1.Global(),
    common_1.Module({ imports: [common_1.forwardRef(() => database_module_1.DatabaseModule)], providers: [context_1.Context], exports: [context_1.Context] })
], ContextModule);
exports.ContextModule = ContextModule;
//# sourceMappingURL=context.module.js.map