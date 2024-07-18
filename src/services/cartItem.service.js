import CartItem from "../models/CartItem.model.js";
import * as userService from "../services/user.service.js";

export async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error("cart item not found", cartItemId);
    }

    const user = await userService.findUserById(item.userId);
    
    if (!user) {
      throw new Error("user item not found", userId);
    }

    console.log(item.product);
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updateCartItem = await item.save();

      return updateCartItem;
    } else {
      throw new Error("you can't update this cart item ");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);
 
  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("you can't remove another user's item");
}
export async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");

  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("cartItem not found with id", cartItemId);
  }
}
