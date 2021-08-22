import { HttpStatus } from '@nestjs/common';

import { CodeMap } from '../@enum/code.enum';
import { ErrorEnum } from '../@enum/error.enum';

export class CodesHelper {
  protected static getCode(code: ErrorEnum): HttpStatus | undefined {
    for (const codeKey of Object.keys(CodeMap)) {
      if (CodeMap[codeKey].includes(code)) {
        return parseInt(codeKey);
      }
    }
  }

  public static get(code: ErrorEnum): number {
    return this.getCode(code) ?? HttpStatus.BAD_REQUEST;
  }
}
