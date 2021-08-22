import { HttpStatus } from '@nestjs/common';
import { ErrorEnum } from '../@enum/error.enum';
export declare class CodesHelper {
    protected static getCode(code: ErrorEnum): HttpStatus | undefined;
    static get(code: ErrorEnum): number;
}
