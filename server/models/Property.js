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

//Define location field
const PropertySchema = new mongoose.Schema({
  address: String,
  price: Number,
  // Define location as a GeoJSON Point
  location: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  }
});

// IMPORTANT: Create the 2dsphere index
PropertySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Property', PropertySchema);
