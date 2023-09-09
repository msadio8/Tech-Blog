const user = require("./user");
const post = require("./post");
const comment = require("./comment");

user.hasMany(post, {
  foreignKey: "userId",
});

post.belongTo(user, {
  foreignKey: "userId",
});

comment.belongsTo(user, {
  foreignKey: "userId",
});

comment.belongsTo(post, {
  foreignKey: "postId",
});

post.hasMany(comment, {
  foreignKey: "postId",
});

user.hasMany(comment, {
  foreignKey: "userId",
});
module.exports = { user, post, comment };
