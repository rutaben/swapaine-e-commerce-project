const express = require('express');
const {
    getBrands,
    createBrand,
    getBrand,
    deleteBrand,
    updateBrand,
    replaceBrand,
} = require('../controllers/brand-controller');

const router = express.Router();

router.get('/', getBrands);

router.post('/', createBrand);

router.get('/:id', getBrand);

router.delete('/:id', deleteBrand);

router.patch('/:id', updateBrand);

router.put('/:id', replaceBrand);

module.exports = router;
