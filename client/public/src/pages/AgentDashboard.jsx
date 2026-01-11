const BillingTab = ({ agentData }) => {
  const [selectedPlan, setSelectedPlan] = useState('Premier');

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Subscription & Billing</h2>
      
      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {['Basic', 'Premier', 'Enterprise'].map(plan => (
          <div 
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`p-4 border-2 rounded-xl cursor-pointer transition ${selectedPlan === plan ? 'border-blue-600 bg-blue-50' : 'border-gray-100'}`}
          >
            <h4 className="font-bold">{plan}</h4>
            <p className="text-sm text-gray-500">Starting at ${plan === 'Basic' ? '29' : '99'}/mo</p>
          </div>
        ))}
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Select Payment Method</h3>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 border p-3 rounded-lg hover:border-blue-500">
            <img src="/stripe-logo.png" className="h-5" alt="Stripe" /> Global Card
          </button>
          <button className="flex items-center gap-2 border p-3 rounded-lg hover:border-blue-500">
            <img src="/paystack-logo.png" className="h-5" alt="Paystack" /> Nigerian Card/Bank
          </button>
          <button className="flex items-center gap-2 border p-3 rounded-lg hover:border-blue-500">
            <img src="/payoneer-logo.png" className="h-5" alt="Payoneer" /> Payoneer Transfer
          </button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="mt-12">
        <h3 className="font-semibold mb-4 text-gray-700">Recent Invoices</h3>
        <div className="border rounded-lg divide-y">
          <div className="p-4 flex justify-between text-sm">
            <span>Oct 12, 2025 - Premier Plan</span>
            <span className="font-mono text-green-600">PAID - $99.00</span>
          </div>
          <div className="p-4 flex justify-between text-sm">
            <span>Sept 12, 2025 - Premier Plan</span>
            <span className="font-mono text-green-600">PAID - $99.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// POST: Add a new listing (For SONEY Agents)
router.post('/add', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Fetch properties based on Map Bounds
router.get('/map-search', async (req, res) => {
  const { nelat, nelng, swlat, swlng } = req.query;
  try {
    const properties = await Property.find({
      'coordinates.lat': { $gte: swlat, $lte: nelat },
      'coordinates.lng': { $gte: swlng, $lte: nelng }
    });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
