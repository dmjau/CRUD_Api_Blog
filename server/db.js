const { Sequelize } = require('sequelize');
const postModel = require('./models/post-model');

//Connect to DB
const sequelize = new Sequelize(
    'n6uHbP4jKf',
    'n6uHbP4jKf',
    'OKHxiMnXTA',
    {
        host: 'remotemysql.com',
        dialect: 'mysql'
    }
);

//Synchronize tables with DB
sequelize.sync({ force: false})
    .then(() => {
        console.log('Tables are synchronized');
});

const Posts = postModel(sequelize, Sequelize);

module.exports = { sequelize, Posts }