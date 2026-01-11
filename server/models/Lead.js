// models/Lead.js
const LeadSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clientName: String,
  clientEmail: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
