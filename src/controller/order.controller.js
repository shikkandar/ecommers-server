import * as orderService from "../services/order.service.js";

export const createOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderService.createOrder(user, req.body);

    console.log("order ", createdOrder);

    return res.status(201).send(createdOrder);
  } catch (error) {
    console.error("Error creating order: ", error.message);
    console.error("Error stack trace: ", error.stack);
    return res.status(500).send({ message: error.message, stack: error.stack });
  }
};

export const findOrderById = async (req, res) => {
  const user = req.user;
  // console.log("userr ",user,req.body)
  try {
    let order = await orderService.findOrderById(req.params.id);

    return res.status(201).send(order);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    let order = await orderService.usersOrderHistory(user._id);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
