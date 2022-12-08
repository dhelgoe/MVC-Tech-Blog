const seedUsers = require('./userseeds');
const seedPosts = require('./postData');
const seedComments = require('./commentseed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll