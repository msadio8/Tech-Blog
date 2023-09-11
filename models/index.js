// Import the necessary models
const User = require("./User.js");
const Post = require("./Post.js");
const Comment = require("./Comment.js");
// Define the relationships between the models
User.hasMany(Post, {
  foreignKey: "user_id", 
});

Post.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(Post, {
  foreignKey: "post_id", 
});

Post.hasMany(Comment, {
  foreignKey: "post_id", 
});

User.hasMany(Comment, {
  foreignKey: "user_id", 
});
// Export the models
module.exports = { User, Post, Comment };
