const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboard-routes')
const comments = require('./api/commentRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;