const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [{
    username: 'derek18',
    email: 'derek@gmail.com',
    password: 'derek11'
}
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;