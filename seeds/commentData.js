const { Comment } = require("../models");

const commmentData = [
  {
    comment_text: "This is a comment",
    post_id: 1,
    user_id: 2,
  },
  {
    comment_text: "this is another comment",
    post_id: 3,
    user_id: 4,
  },
  {
    comment_text: "I love this place!",
    post_id: 5,
    user_id: 6,
  },
  {
    comment_text: "Great food!",
    post_id: 7,
    user_id: 8,
  },
  {
    comment_text: "I hate it",
    post_id: 9,
    user_id: 10,
  },
  {
    comment_text: "Exiciting new technology",
    post_id: 11,
    user_id:  12,
  }
];
const seedComments = () => Comment.bulkCreate(commmentData);
module.exports = seedComments;
