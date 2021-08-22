import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';

export class ModuleUtil {
  protected static checkEnvForLoad(arr: any[] | undefined) {
    return process.env.NODE_ENV === 'test' ? arr || [] : [];
  }

  /**
   * @description
   * All providers from test will reexport;
   * All objects from test will works only when process.env.NODE_ENV === 'test';
   */
  public static load(
    production: ModuleMetadata,
    test?: Pick<ModuleMetadata, 'imports' | 'providers' | 'controllers'>,
  ): ModuleMetadata {
    return {
      imports: [...(production.imports || []), ...ModuleUtil.checkEnvForLoad(test?.imports)],
      providers: [...(production.providers || []), ...ModuleUtil.checkEnvForLoad(test?.providers)],
      controllers: [...(production.controllers || []), ...ModuleUtil.checkEnvForLoad(test?.controllers)],
      exports: [...(production.exports || []), ...ModuleUtil.checkEnvForLoad(test?.providers)],
    };
  }
}
