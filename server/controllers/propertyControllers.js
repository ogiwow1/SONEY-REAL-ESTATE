exports.getPropertiesInView = async (req, res) => {
  const { sw_lat, sw_lng, ne_lat, ne_lng } = req.query;

  try {
    const homes = await Property.find({
      location: {
        $geoWithin: {
          $box: [
            [parseFloat(sw_lng), parseFloat(sw_lat)], // Bottom-left corner
            [parseFloat(ne_lng), parseFloat(ne_lat)]  // Top-right corner
          ]
        }
      }
    });
    res.json(homes);
  } catch (err) {
    res.status(500).json({ error: "Spatial search failed" });
  }
};
