"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtil = void 0;
class ObjectUtil {
    static fillMapOfArray(map, value, key) {
        if (!map[String(value[key])])
            map[String(value[key])] = [];
        map[String(value[key])].push(value);
    }
}
exports.ObjectUtil = ObjectUtil;
//# sourceMappingURL=object.util.js.map