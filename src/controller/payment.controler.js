import * as paymentService from "../services/payment.service.js";

export const createPaymentLink = async (req, res) => {
  try {
    const { orderId } = req.body; // Extract orderId from req.body
    const paymentLink = await paymentService.createPaymentLink(orderId);
    return res.status(200).send(paymentLink);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updatePaymentInformation = async (req, res) => {
  try {
    await paymentService.updatePaymentInformation(req.query);
    return res.status(200).send({ message: "payment information updated", status: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
