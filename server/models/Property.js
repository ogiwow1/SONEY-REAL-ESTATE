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

//add a field to store the video URL and a flag to identify if a listing has a "Virtual Tour."
const PropertySchema = new mongoose.Schema({
  // ... existing fields ...
  videoUrl: String, // URL from Cloudinary or YouTube/Vimeo
  hasVirtualTour: { type: Boolean, default: false },
  videoThumbnail: String
});




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
