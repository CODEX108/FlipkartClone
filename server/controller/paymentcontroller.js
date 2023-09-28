import Stripe from 'stripe';

const stripe=new Stripe('sk_test_51NiJdfSHC3pf9dLgteL8CGRARRXeR5coQUMvDhWzOMutUaiYpwl6g9Dl5yvbhkA043vfkfek3e6VaWltm5l52Gbw00GGUvqWY8');

export const createPayment=async(req, res)=>{
    const { amount, currency } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const processPayment=async(req, res)=>{
    const { paymentMethodId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      confirm: true,
    });
    // Handle order fulfillment and respond to the client
    res.status(200).json({ message: 'Payment successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}