import * as productService from "../services/product.service.js";

export const createProduct = async (req, res) => {
  try {
    let product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    let product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    let product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    let product = await productService.findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.query);

    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const createMulipleProducts = async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Product created successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
