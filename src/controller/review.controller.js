import * as reviewservice from "../services/review.service.js";

export const createReview = async (req, res) => {
  const user = req.user;
  try {
    let review = await reviewservice.createReview(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllReview = async (req, res) => {
  const productId = req.params.productId;
  try {
    let reviews = await reviewservice.getAllReviews(productId);
    return res.status(201).send(reviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
