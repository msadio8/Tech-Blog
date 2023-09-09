const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

user.hasMany(Post, {
  foreignKey: "userId",
});

post.belongTo(User, {
  foreignKey: "userId",
});

comment.belongsTo(User, {
  foreignKey: "userId",
});

comment.belongsTo(Post, {
  foreignKey: "postId",
});

post.hasMany(Comment, {
  foreignKey: "postId",
});

user.hasMany(Comment, {
  foreignKey: "userId",
});
module.exports = { User, Post, Comment };
