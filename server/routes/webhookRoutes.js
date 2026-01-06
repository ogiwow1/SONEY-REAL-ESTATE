// routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/payment-webhook', async (req, res) => {
    const { event, data, gateway } = req.body; // Gateway identifier sent in metadata

    try {
        let userId, planType;

        // Normalize data based on the provider
        if (gateway === 'STRIPE') {
            userId = data.object.metadata.userId;
            planType = data.object.metadata.planType;
        } else if (gateway === 'PAYSTACK') {
            userId = data.metadata.userId;
            planType = data.metadata.planType;
        }

        // 🚀 THE LOGIC: Unlock Premier Features
        await User.findByIdAndUpdate(userId, {
            'subscription.plan': planType,
            'subscription.status': 'active',
            'subscription.lastPaymentDate': new Date(),
            // Set role to 'Agent' if they were a basic user
            role: 'Agent' 
        });

        console.log(`✅ SONEY: Features unlocked for User ${userId}`);
        res.status(200).send('Webhook Processed');
        
    } catch (err) {
        console.error('❌ Webhook Error:', err.message);
        res.status(500).send('Internal Server Error');
    }
});
