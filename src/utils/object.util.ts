export class ObjectUtil {
  static fillMapOfArray<D>(map: { [key: string]: D[] }, value: D, key: keyof D) {
    if (!map[String(value[key])]) map[String(value[key])] = [];
    map[String(value[key])].push(value);
  }

  public static merge<T extends Record<string, any>, D extends T = any>(a: D, ...b: T[]): T & D {
    return Object.assign(a, ...b);
  }
}
