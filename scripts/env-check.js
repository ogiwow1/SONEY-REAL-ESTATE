const requiredEnvs = ['MONGO_URI', 'JWT_SECRET', 'SENDGRID_API_KEY', 'REACT_APP_API_URL'];

requiredEnvs.forEach(env => {
  if (!process.env[env]) {
    console.error(`❌ ERROR: Missing environment variable: ${env}`);
    process.exit(1);
  }
});
console.log("✅ All environment variables verified for SONEY.");
