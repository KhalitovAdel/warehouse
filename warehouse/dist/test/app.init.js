"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApplication = void 0;
const testing_1 = require("@nestjs/testing");
const http_exception_filter_1 = require("../@filters/http-exception.filter");
const context_module_1 = require("../context/context.module");
const database_module_1 = require("../database/database.module");
const initApplication = async (metadata, cb) => {
    if (!metadata.imports)
        metadata.imports = [];
    metadata.imports.push(database_module_1.DatabaseModule, context_module_1.ContextModule);
    const module = await testing_1.Test.createTestingModule(metadata).compile();
    if (cb) {
        await cb(module);
    }
    const app = module.createNestApplication();
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    return app;
};
exports.initApplication = initApplication;
//# sourceMappingURL=app.init.js.map