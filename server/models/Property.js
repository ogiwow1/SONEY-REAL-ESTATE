const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  address: String,
  beds: Number,
  baths: Number,
  sqft: Number,
  images: [String],
  coordinates: {
    lat: Number,
    lng: Number
  },
  zestimate: Number,
  type: { type: String, enum: ['For Sale', 'For Rent', 'Sold'] }
});

module.exports = mongoose.model('Property', PropertySchema);
