"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
let emailNumber = 1;
const createUser = (email) => {
    emailNumber++;
    return {
        firstName: 'TestName',
        lastName: 'TestLastName',
        middleName: 'TestMiddleName',
        email: email || `testEmail${emailNumber}@gmail.com`,
    };
};
exports.createUser = createUser;
//# sourceMappingURL=user.seed.js.map