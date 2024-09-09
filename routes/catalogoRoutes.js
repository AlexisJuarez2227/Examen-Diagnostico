// routes/catalogoRoutes.js
const express = require('express');
const catalogoController = require('../controllers/catalogoController');
const router = express.Router();

router.get('/products', catalogoController.getAllProducts);
router.get('/products/:id', catalogoController.getProductById);
router.post('/products', catalogoController.createProduct);
router.put('/products/:id', catalogoController.updateProduct);
router.delete('/products/:id', catalogoController.deleteProduct);

module.exports = router;
