// routes/userRoutes.js
router.post('/save-home', async (req, res) => {
  const { userId, propertyId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user.savedProperties.includes(propertyId)) {
      user.savedProperties.push(propertyId);
      await user.save();
    }
    res.status(200).json({ message: "Home saved to SONEY profile!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

const SaveButton = ({ propertyId, userId }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = async () => {
    const response = await fetch('/api/users/save-home', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, propertyId })
    });
    if (response.ok) setIsSaved(true);
  };

  return (
    <button 
      onClick={toggleSave}
      className={`p-2 rounded-full border ${isSaved ? 'bg-red-500 text-white' : 'bg-white text-gray-400'}`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
    </button>
  );
};
