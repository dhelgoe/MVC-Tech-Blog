const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    res.render('post')
});


router.post('/', async (req, res) => {
    try {
      const postData = await User.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: 1,
      });

      res.staus(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
