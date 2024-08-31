
const express = require('express');
const router = express.Router();
const logger = require('./función');

router.use(logger);

router.get('/', (req, res) => {
    res.send('Estás en la ruta 1');
});

module.exports = router;
