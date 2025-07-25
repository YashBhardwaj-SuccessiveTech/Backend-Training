"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class mockApii {
    mockApi(count) {
        return (req, res, next) => {
            try {
                const user = [];
                for (let i = 0; i < count; i++) {
                    user.push({
                        id: faker_1.faker.string.uuid(),
                        name: faker_1.faker.person.fullName(),
                        email: faker_1.faker.internet.email(),
                    });
                }
                req.users = user;
                next();
            }
            catch (err) {
                console.log(err);
            }
        };
    }
}
exports.default = mockApii;
