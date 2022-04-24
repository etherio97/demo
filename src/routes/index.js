const { Router } = require('express');

const test = requrie('./test');

const router = Router();

router.use('/test', test);

module.exports = router;
