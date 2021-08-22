"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudMapperDefault = void 0;
const error_enum_1 = require("../@enum/error.enum");
const error_default_1 = require("../error.default");
class CrudMapperDefault {
    constructor(crud) {
        this.crud = crud;
    }
    create(params) {
        return this.crud.create(params);
    }
    update(id, toUpdate) {
        return this.crud.updateOne(id, toUpdate);
    }
    read(id) {
        return this.crud.fetchOne(id);
    }
    delete(id) {
        return this.crud.delete(id);
    }
    async checkDuplicates(...uniques) {
        for (const unique of uniques) {
            const count = await this.crud.count({ where: unique });
            if (!count)
                continue;
            const data = Object.keys(unique).reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr]: error_enum_1.ErrorInputDescription[error_enum_1.ErrorInputDescription.UNIQUE_FIELD] })), {});
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.INVALID_INPUT, data);
        }
    }
}
exports.CrudMapperDefault = CrudMapperDefault;
//# sourceMappingURL=crud.mapper.js.map