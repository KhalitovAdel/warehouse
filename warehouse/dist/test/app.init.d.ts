import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';
import { TestingModule } from '@nestjs/testing';
export declare const initApplication: (metadata: ModuleMetadata, cb?: ((module: TestingModule) => Promise<void> | void) | undefined) => Promise<import("@nestjs/common").INestApplication>;
