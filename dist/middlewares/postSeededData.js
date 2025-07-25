"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class generateMock {
    generatemockData() {
        return (req, res, next) => {
            let count = parseInt(req.body.count);
            if (!count) {
                res.status(401).json({ message: "Invalid Request" });
            }
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
        };
    }
}
exports.default = generateMock;
