"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompany = void 0;
let createCompanyCounter = 0;
const createCompany = () => {
    createCompanyCounter++;
    return {
        name: `Test company - ${createCompanyCounter}`,
    };
};
exports.createCompany = createCompany;
//# sourceMappingURL=company.seed.js.map