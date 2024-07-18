import Rating from "../models/Rating.model.js";
import * as productService from "../services/product.service.js";

export async function createRating(req, user) {
  const product = await productService.findProductById(req.productId);

  const rating = new Rating({
    user: product._id,
    product: user._id,
    review: req.rating,
    createdAt: new Date(),
  });

  return await rating.save();
}

export async function getProductRating(productId) {
  return await Rating.find({ product: productId });
}
