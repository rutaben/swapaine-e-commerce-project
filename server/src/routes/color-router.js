const express = require('express');
const {
    getColors,
    createColor,
    getColor,
    deleteColor,
    updateColor,
    replaceColor,
} = require('../controllers/color-controller');

const router = express.Router();

router.get('/', getColors);

router.post('/', createColor);

router.get('/:id', getColor);

router.delete('/:id', deleteColor);

router.patch('/:id', updateColor);

router.put('/:id', replaceColor);

module.exports = router;
