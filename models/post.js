const{ Model,DataTypes} = require ("sequelize");
const sequelize = require("../config/connection");

class post extends Model {}

post.init(
    {
        id: {
            type : DataTypes.INTEGER ,  // primary key
            allowNull: false,
            primaryKey: true,
            autoIncrement:true   //auto incrementing the value of this column
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        content_id:{
            type:DataTypes.TEXT,
            allowNull:false,
            validate: {
                len: [1],
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model:"user",
                key:'id',
            },
        },
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName:true,
        underscored:true,
        modelName:"post",
    }
);
module.exports=post;