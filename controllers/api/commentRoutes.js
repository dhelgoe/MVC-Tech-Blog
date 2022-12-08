const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    res.render('comment')
});

router.post('/', async (req, res) => {
    try {
      const postComment = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: 1,
      });

      res.staus(200).json(postComment);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;