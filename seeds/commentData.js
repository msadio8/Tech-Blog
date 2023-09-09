const { comment } = require("../models");

const commmentData = [
  {
    commentText: "This is a comment",
    postId: 1,
    userId: 2,
  },
  {
    commentText: "this is another comment",
    postId: 3,
    userId: 4,
  },
  {
    commentText: "I love this place!",
    postId: 5,
    userId: 6,
  },
  {
    commentText: "Great food!",
    postId: 7,
    userId: 8,
  },
  {
    commentText: "I hate it",
    postId: 9,
    userId: 10,
  },
  {
    commentText: "Exiciting new technology",
    postId: 11,
    userId:  12,
  }
];
const seedComments = () => comment.bulkCreate(commmentData);
module.exports = seedComments;
