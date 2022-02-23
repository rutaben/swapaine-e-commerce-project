const express = require('express');
const {
    getCategories,
    createCategory,
    getCategory,
    deleteCategory,
    updateCategory,
    replaceCategory,
} = require('../controllers/category-controller');

const router = express.Router();

router.get('/', getCategories);

router.post('/', createCategory);

router.get('/:id', getCategory);

router.delete('/:id', deleteCategory);

router.patch('/:id', updateCategory);

router.put('/:id', replaceCategory);

module.exports = router;
