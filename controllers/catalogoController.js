// controllers/catalogoController.js
const Product = require('../models/product'); // Importa el modelo Product

// Obtener todos los productos
exports.getAllProducts = (req, res) => {
  Product.findAll()  // Usa Sequelize para encontrar todos los productos
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al obtener los productos', error: err });
    });
};

// Obtener un producto por ID
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  Product.findByPk(productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al obtener el producto', error: err });
    });
};

// Crear un nuevo producto
exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct)
    .then(product => {
      res.status(201).json(product);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al crear el producto', error: err });
    });
};

// Actualizar un producto existente
exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  Product.update(updatedProduct, { where: { id: productId } })
    .then(() => {
      res.send(`Producto con ID ${productId} actualizado.`);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al actualizar el producto', error: err });
    });
};

// Eliminar un producto
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  Product.destroy({ where: { id: productId } })
    .then(() => {
      res.status(204).send();  // No content to send back
    })
    .catch(err => {
      res.status(500).json({ message: 'Error al eliminar el producto', error: err });
    });
};
