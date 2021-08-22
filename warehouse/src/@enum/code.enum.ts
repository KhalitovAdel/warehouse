import { HttpStatus } from '@nestjs/common';

import { ErrorEnum } from './error.enum';

export const CodeMap = {
  [String(HttpStatus.INTERNAL_SERVER_ERROR)]: [ErrorEnum.UNPROCESSED],
};
