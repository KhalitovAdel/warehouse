"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cfg = require("config");
const typeorm_2 = require("typeorm");
const namespace_enum_1 = require("../@enum/namespace.enum");
const context_module_1 = require("../context/context.module");
const module_util_1 = require("../utils/module.util");
const database_service_1 = require("./database.service");
const transaction_1 = require("./transaction");
const creteRunner = async (connection) => {
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    return queryRunner;
};
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module(module_util_1.ModuleUtil.load({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: cfg.get('db.host'),
                port: cfg.get('db.port'),
                username: cfg.get('db.username'),
                password: cfg.get('db.password'),
                database: cfg.get('db.database'),
                synchronize: true,
                autoLoadEntities: true,
            }),
            common_1.forwardRef(() => context_module_1.ContextModule),
        ],
        providers: [
            transaction_1.Transaction,
            {
                provide: namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_SINGLETON],
                useFactory: creteRunner,
                inject: [typeorm_2.Connection],
            },
            {
                scope: common_1.Scope.REQUEST,
                provide: namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.TRANSACTION_RUNNER],
                useFactory: async (connection) => {
                    const queryRunner = await creteRunner(connection);
                    await queryRunner.startTransaction();
                    return queryRunner;
                },
                inject: [typeorm_2.Connection],
            },
            {
                scope: common_1.Scope.REQUEST,
                provide: namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_TRANSACTION],
                useFactory: (sessionRunner) => {
                    return sessionRunner.manager;
                },
                inject: [namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.TRANSACTION_RUNNER]],
            },
        ],
        exports: [
            transaction_1.Transaction,
            namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_TRANSACTION],
            namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_SINGLETON],
        ],
    }, {
        providers: [database_service_1.DatabaseService],
    }))
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map