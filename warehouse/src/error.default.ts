import { ErrorEnum } from './@enum/error.enum';

export class ErrorDefault extends Error {
  constructor(
    public readonly code: ErrorEnum = ErrorEnum.UNPROCESSED,
    public readonly data?: Record<string, unknown> | string,
  ) {
    super(typeof data === 'string' ? data : undefined);
  }
}
