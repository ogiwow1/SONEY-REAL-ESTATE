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
