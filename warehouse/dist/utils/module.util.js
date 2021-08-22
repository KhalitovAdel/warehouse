"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleUtil = void 0;
class ModuleUtil {
    static checkEnvForLoad(arr) {
        return process.env.NODE_ENV === 'test' ? arr || [] : [];
    }
    static load(production, test) {
        return {
            imports: [...(production.imports || []), ...ModuleUtil.checkEnvForLoad(test === null || test === void 0 ? void 0 : test.imports)],
            providers: [...(production.providers || []), ...ModuleUtil.checkEnvForLoad(test === null || test === void 0 ? void 0 : test.providers)],
            controllers: [...(production.controllers || []), ...ModuleUtil.checkEnvForLoad(test === null || test === void 0 ? void 0 : test.controllers)],
            exports: [...(production.exports || []), ...ModuleUtil.checkEnvForLoad(test === null || test === void 0 ? void 0 : test.providers)],
        };
    }
}
exports.ModuleUtil = ModuleUtil;
//# sourceMappingURL=module.util.js.map