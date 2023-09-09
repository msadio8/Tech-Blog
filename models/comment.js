const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class comment extends Model {}

comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentText: {
      type: DataTypes.STRING, // data type of the column in our table
      allowNull: false, // if not null then it will be required to enter a value for this field when creating an entry
      validate: {
        len: [1],
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      }, // foreign key reference to user model and its 'id' field
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
module.exports = comment;
