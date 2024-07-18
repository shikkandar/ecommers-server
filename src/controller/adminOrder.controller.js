import * as orderService from "../services/order.service.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.confirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const shippOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const deliiverOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const cancelOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.cancelledOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await orderService.deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// const handleOrderOperation = async (req, res, serviceFunction) => {
//     try {
//       const result = await serviceFunction(req.params.orderId);
//       res.status(200).send(result);
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   };
//   export const confirmedOrders = (req, res) => {
//     handleOrderOperation(req, res, orderService.confirmedOrder);
//   };
  
//   export const shippOrders = (req, res) => {
//     handleOrderOperation(req, res, orderService.shipOrder);
//   };
  
//   export const deliiverOrders = (req, res) => {
//     handleOrderOperation(req, res, orderService.deliverOrder);
//   };
  
//   export const cancelOrders = (req, res) => {
//     handleOrderOperation(req, res, orderService.cancelledOrder);
//   };
  
//   export const deleteOrders = (req, res) => {
//     handleOrderOperation(req, res, orderService.deleteOrder);
//   };  