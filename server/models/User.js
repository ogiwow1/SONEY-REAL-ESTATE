// models/User.js (Updated with Billing)
const UserSchema = new mongoose.Schema({
  // ... previous fields ...
  role: { type: String, enum: ['Buyer', 'Agent', 'Admin'], default: 'Buyer' },
  subscription: {
    plan: { type: String, enum: ['Free', 'Basic', 'Premier'], default: 'Free' },
    status: { type: String, enum: ['active', 'canceled', 'past_due'], default: 'active' },
    stripeCustomerId: String,
    currentPeriodEnd: Date
  },
  metrics: {
    totalLeadsReceived: { type: Number, default: 0 },
    revenueGenerated: { type: Number, default: 0 }
  }
});
