"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cfg = require("config");
const http_exception_filter_1 = require("./@filters/http-exception.filter");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    await app.listen(cfg.get('http.port'));
}
bootstrap();
//# sourceMappingURL=main.js.map