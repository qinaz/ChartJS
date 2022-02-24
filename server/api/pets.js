// api/pets.js
const router = require('express').Router();

router.get('/', function (req, res, next) {});

router.post('/', function (req, res, next) {
  /* etc */
});

// router.put('/:puppyId', function (req, res, next) { /* etc */});

// router.delete('/:puppyId', function (req, res, next) { /* etc */});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
