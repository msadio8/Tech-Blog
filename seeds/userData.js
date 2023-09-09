const { user } = require("../models");

const userData = [
  {
    username: "Jeff",
    email: "jeff@gmail.com",
    password: "password12345",
  },
  {
    username: "Mary",
    email: "mary@hotmail.com",
    password: "password14789",
  },
  {
    username: "Rachel",
    email: "rachel@gmail.com",
    password: "password12345",
  },
  {
    username: "Kimberly",
    email: "kimberly@gmail.com",
    password: "password12345",
  },
  {
    username: "Brianne",
    email: "brian@gmail.com>",
    password: "password14789",
  },
];
const seedUsers = () => user.bulkCreate(userData);
module.exports = seedUsers;
