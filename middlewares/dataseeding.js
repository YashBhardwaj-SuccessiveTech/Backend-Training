import { faker } from "@faker-js/faker";

export default function mockApi(count) {
  return (req, res, next) => {
    try {
      const user = [];
      for (let i = 0; i < count; i++) {
        user.push({
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email(),
        });
      }

      req.users = user;

      next();
    } catch (err) {
      console.log(err);
    }
  };
}
