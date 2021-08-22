import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Context } from './context';
export declare class ContextInterceptor implements NestInterceptor {
    protected readonly context: Context;
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<any>;
}
