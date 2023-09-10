const { User } = require("../models");

const userData = [
  {
    username: "jeff1",
    email: "jeff@gmail.com",
    password: "password12345",
  },
  {
    usernamename: "mary03",
    email: "mary@hotmail.com",
    password: "password14789",
  },
  {
    usernamename: "rachel12",
    email: "rachel@gmail.com",
    password: "password12345",
  },
  {
    usernamename: "kimberly145",
    email: "kimberly@gmail.com",
    password: "password12345",
  },
  {
    username: "brianne45",
    email: "brian@gmail.com>",
    password: "password14789",
  },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
