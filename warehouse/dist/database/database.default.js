"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseDefault = void 0;
class DatabaseDefault {
    constructor(entity, entityManager, idKey) {
        this.entity = entity;
        this.entityManager = entityManager;
        this.idKey = idKey;
    }
    transformQuery(query) {
        return typeof query === 'number' ? { where: { [this.idKey]: query } } : query;
    }
    create(params) {
        return this.entityManager.save(this.entity, params);
    }
    async updateOne(query, toUpdate) {
        return this.updateMany(Object.assign({ take: 1 }, this.transformQuery(query)), toUpdate).then((data) => data[0]);
    }
    async updateMany(query, toUpdate) {
        const exists = await this.entityManager.find(this.entity, query);
        if (!exists)
            return [];
        return this.entityManager.save(this.entity, exists.map((curr) => (Object.assign(Object.assign({}, curr), toUpdate))));
    }
    async delete(id) {
        return this.entityManager.delete(this.entity, id);
    }
    fetchOne(query, select) {
        return this.list(Object.assign(Object.assign({ take: 1 }, this.transformQuery(query)), { select })).then(({ data }) => data[0]);
    }
    async list(options) {
        const [document, count] = await this.entityManager.findAndCount(this.entity, options);
        return {
            data: document || [],
            count: count || 0,
        };
    }
    async count(query) {
        const transformedQuery = this.transformQuery(query !== null && query !== void 0 ? query : {});
        return this.entityManager.count(this.entity, transformedQuery);
    }
}
exports.DatabaseDefault = DatabaseDefault;
//# sourceMappingURL=database.default.js.map