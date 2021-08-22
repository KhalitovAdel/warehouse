import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';
export declare class ModuleUtil {
    protected static checkEnvForLoad(arr: any[] | undefined): any[];
    static load(production: ModuleMetadata, test?: Pick<ModuleMetadata, 'imports' | 'providers' | 'controllers'>): ModuleMetadata;
}
