const router = require('express').Router();

router.use('/pets', require('./pets'));

module.exports = router;
