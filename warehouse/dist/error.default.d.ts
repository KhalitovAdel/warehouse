import { ErrorEnum } from './@enum/error.enum';
export declare class ErrorDefault extends Error {
    readonly code: ErrorEnum;
    readonly data?: string | Record<string, unknown> | undefined;
    constructor(code?: ErrorEnum, data?: string | Record<string, unknown> | undefined);
}
