const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
      const Data = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      const post = postData.map((posts) => posts.get({ plain: true }));

      res.render('homepage', {
        post});
      }
      
      catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
module.exports = router