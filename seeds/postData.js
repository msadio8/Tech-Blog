const { Post } = require("../models");

const postData = [
  {
    title: "The Best Way to Learn React",
    content: " This is about ways how to learn React",
    userId: 1,
  },
  {
    title: "How To Use Redux In Your Next Project?",
    content: "This article will help you use redux in your next project.",
    userId: 2,
  },
  {
    title: "Why You Should Start Learning Node.js",
    content:
      "Node.js has become one of the most popular programming languages for web development.",
    userId: 3,
  },
  {
    title: "What Is The Difference Between A Framework And Library?",
    content:
      "A framework provides a structure and starting point for building an application while libraries provide tools that can be used within applications or frameworks.",
    userId: 4,
  },
  {
    title:
      "React vs Angular 2 vs Vue.js – Which One Do I Choose For My Web App Development Projects? ",
    content:
      "Angular and Vue are both JavaScript frameworks that can be used with TypeScript or plain JavaScript codebases.",
    userId: 5,
  },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = { seedPosts };
