import * as cartService from "../services/cart.service.js";

export const findUserCart = async (req, res) => {
  const user = req.user;
  try {
    const user = req.user;
    const cart = await cartService.findUserCart(user.id);
    res.status(200).json(cart);
  } catch (error) {
    // Handle error here and send appropriate response
    res.status(500).json({ message: "Failed to get user cart.", error: error.message });
  }
};
export const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem=await cartService.addCartItem(user._id,req.body)
    return res.status(200).send(cartItem)
  } catch (error) {
    return res.status(500).send({error:error.message})
  }
};
