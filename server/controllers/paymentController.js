// This tells the engine to use the key from your secret .env file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const initializePaystack = async (data) => {
    // Uses the Paystack secret key securely
    const authHeader = { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` };
    // logic...
}
