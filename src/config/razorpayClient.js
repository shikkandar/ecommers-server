import Razorpay from "razorpay";

const api_key = "rzp_test_zARY0RSjcT7T5U";

const api_secret = "z8xMaIWp1vMCtrjV7DyUQcm4";

export const razorpay = new Razorpay({
  key_id: api_key,
  key_secret: api_secret,
});
