import { forwardRef, Global, Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { Context } from './context';

/**
 * This is the context module:
 * - Who store metadata for request.
 * - Control about result of request.
 * - Module is global.
 */
@Global()
@Module({ imports: [forwardRef(() => DatabaseModule)], providers: [Context], exports: [Context] })
export class ContextModule {}
