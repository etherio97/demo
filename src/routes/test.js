const { Router } = require('express');
const { index } = require('../controllers/test.controller');

const router = Router();

router.get('/', index);

module.exports = router;
