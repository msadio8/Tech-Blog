const { Post } = require("../models");

const postData = [
  {
    title: "Latest Blog Post",
    content: " This is about ways how to learn React",
    user_id: 1,
  },
  {
    title: "Next Project Blog Post?",
    content: "This article will help you use redux in your next project.",
    user_id: 2,
  },
  {
    title: "Node.js Blog Post",
    content:
      "Node.js has become one of the most popular programming languages for web development.",
    user_id: 3,
  },
  {
    title: " Framework And Library Blog Post",
    content:
      "A framework provides a structure and starting point for building an application while libraries provide tools that can be used within applications or frameworks.",
    user_id: 4,
  },
  {
    title: "Web App Development Projects Blog Post ",
    content:
      "Angular and Vue are both JavaScript frameworks that can be used with TypeScript or plain JavaScript codebases.",
    user_id: 5,
  },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;

