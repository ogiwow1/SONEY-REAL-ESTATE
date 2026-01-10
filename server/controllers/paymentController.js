// controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const axios = require('axios'); // For Paystack/Flutterwave APIs

exports.initializeSubscription = async (req, res) => {
  const { planId, gateway, userId, email, amount } = req.body;

  switch (gateway) {
    case 'STRIPE':
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        payment_method_types: ['card'],
        line_items: [{ price: planId, quantity: 1 }],
        mode: 'subscription',
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      });
      return res.json({ url: session.url });

    case 'PAYSTACK': // Leading Nigerian Brand
      const response = await axios.post('https://api.paystack.co/transaction/initialize', {
        email,
        amount: amount * 100, // Paystack uses kobo
        callback_url: `${process.env.FRONTEND_URL}/verify-paystack`,
        metadata: { userId, planId }
      }, {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
      });
      return res.json({ url: response.data.data.authorization_url });

    case 'BANK_TRANSFER':
      // Manual verification logic
      return res.json({ 
        instructions: "Please transfer to SONEY LTD, Zenith Bank: 1234567890. Upload receipt in dashboard." 
      });

    default:
      res.status(400).send('Invalid Gateway');
  }
};

// This tells the engine to use the key from your secret .env file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const initializePaystack = async (data) => {
    // Uses the Paystack secret key securely
    const authHeader = { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` };
    // logic...
}
