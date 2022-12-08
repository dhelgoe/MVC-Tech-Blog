const router = require('express').Router();


const commentRoutes = require('./commentRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', loginRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);



module.exports = router;