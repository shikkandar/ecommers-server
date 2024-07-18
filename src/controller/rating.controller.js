import * as ratingservice from "../services/rating.service.js";

export const createRating = async (req, res) => {
  const user = req.user;
  try {
    let review = await ratingservice.createRating(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  try {
    let reviews = await ratingservice.getAllRatings(productId);
    return res.status(201).send(reviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
