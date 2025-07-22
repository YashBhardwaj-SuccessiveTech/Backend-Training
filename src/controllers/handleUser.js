const express = require("express");
const app = express();

const generateRandomData = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };
};

export const handleUserLogin = (req, res) => {
  const initdata = {
    name: "yash",
    email: "yash@gmail.com",
    password: "12345",
  };

  const { email, password, count } = req.body;

  if (email == initdata.email && password == initdata.password) {
    console.log("user is Authenticated");
  } else {
    console.log("user is not authorised");
  }
  const randomusers = faker.helpers.multiple(generateRandomData, {
    count: count,
  });

  res.status(200).json({
    message:"user data generated successfully",
    data:randomusers,
  })

};
