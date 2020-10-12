const router = require('express').Router();
const { getLines,getCalls,getBills } = require('../controllers/data');

// запрос всех lines
router.get('/lines', getLines);
router.get('/calls', getCalls);
router.get('/bills', getBills);

module.exports = router;
