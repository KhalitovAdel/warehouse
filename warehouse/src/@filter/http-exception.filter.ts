import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { ErrorEnum } from '../@enum/error.enum';
import { ErrorDefault } from '../error.default';
import { CodesHelper } from './http-exception.helper';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException | ErrorDefault, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const error = exception instanceof ErrorDefault ? exception : new ErrorDefault();
    const status = CodesHelper.get(error.code);
    const data = error.data || null;

    return response.status(status).json({
      data,
      code: ErrorEnum[error.code],
      statusCode: status,
      timestamp: new Date().toISOString(),
    });
  }
}
