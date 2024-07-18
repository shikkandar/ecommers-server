import { razorpay } from "../config/razorpayClient.js";
import * as orderService from "../services/order.service.js";

export const createPaymentLink = async (orderId) => {
  try {
    const order = await orderService.findOrderById(orderId);
    console.log("order ", order);
    // Create a payment link for the order
    const paymentLinkRequest = {
      amount: order.totalDiscountedPrice *100 ,
      currency: 'INR',
       customer: {
        name: order.user.firstName + ' ' + order.user.lastName,
        contact: order.user.mobile,
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:5173/payment/${orderId}`,
      callback_method: 'get',
    };

    const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

    const paymentLinkId = paymentLink.id;
    const payment_link_url = paymentLink.short_url;

    // Return the payment link URL and ID in the response
    const resData = {
      paymentLinkId: paymentLinkId,
      payment_link_url,
    };
    return resData;
  } catch (error) {
    console.error('Error creating payment link:', error);
    throw new Error(error.message);
  }
};

export const updatePaymentInformation = async (reqData) => {
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;

  try {
    const order = await orderService.findOrderById(orderId);

    const payment = await razorpay.payments.fetch(paymentId);

    if (payment.status === 'captured') {
      order.paymentDetails.paymentId = paymentId;
      order.paymentDetails.status = 'COMPLETED';
      order.orderStatus = 'PLACED';

      await order.save();
    }
    console.log('payment status', order);
    const resData = { message: 'Your order is placed', success: true };
    return resData;
  } catch (error) {
    console.error('Error processing payment:', error);
    throw new Error(error.message);
  }
};
