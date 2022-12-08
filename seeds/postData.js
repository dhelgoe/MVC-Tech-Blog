const { Post } = require('../models');

const postdata = [
    {
        title: 'Post 1',
        post_text: 'First Post:)',
        user_id: 1,
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;