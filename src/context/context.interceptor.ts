import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Context } from './context';

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  @Inject(Context) protected readonly context: Context;

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = ctx.switchToHttp().getRequest();
    this.context.setRequest(request);

    return next.handle().pipe(
      tap({
        next: () => this.context.success(),
        error: () => this.context.error(),
      }),
    );
  }
}
