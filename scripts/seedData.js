const mongoose = require('mongoose');
const Property = require('./models/Property'); // Import your schema

const seedData = async () => {
  await mongoose.connect('YOUR_MONGODB_URI');
  await Property.deleteMany({}); // Clear existing data

  const properties = [];
  for (let i = 0; i < 50; i++) {
    const price = Math.floor(Math.random() * (2000000 - 300000) + 300000);
    properties.push({
      title: `SONEY Modern Home ${i + 1}`,
      price: price,
      address: `${Math.floor(Math.random() * 9999)} Sunset Blvd, Los Angeles, CA`,
      beds: Math.floor(Math.random() * 5) + 1,
      baths: Math.floor(Math.random() * 4) + 1,
      sqft: Math.floor(Math.random() * 3000) + 1000,
      zestimate: Math.floor(price * 1.05),
      images: [
        `https://source.unsplash.com/random/800x600?house&sig=${i}`,
        `https://source.unsplash.com/random/800x600?interior&sig=${i}`
      ],
      coordinates: {
        lat: 34.0522 + (Math.random() - 0.5) * 0.1, // Randomized around LA
        lng: -118.2437 + (Math.random() - 0.5) * 0.1
      }
    });
  }

  await Property.insertMany(properties);
  console.log("SONEY Database Seeded with 50 Listings!");
  process.exit();
};

seedData();
