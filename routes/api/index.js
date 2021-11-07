const router =required('express').Router();

const userRoutes = require('../../api/user-routes.js');

router.use('/user', userRoutes);

module.exports = router;
