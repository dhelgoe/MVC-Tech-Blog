const router = require('express').Router();
const { route } = require('../home-routes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');

router.use('/login', loginRoutes);
router.use('/post', postRoutes);
//need one for every api controller route


module.exports = router;