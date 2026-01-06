# SONEY-REAL-ESTATE
SONEY is an enterprise-grade, full-stack real estate marketplace designed to replicate and improve upon the core functionality of known industry leaders. It is built using the MERN Stack (MongoDB, Express, React, Node.js) and is architected for high-speed performance, data accuracy, and global monetization.
# SONEY - Full-Stack Real Estate Engine

SONEY is a high-performance Zillow clone built with the MERN stack. It features real-time property valuations (SONEY Estimate™), interactive map searching, and a direct-to-agent lead generation system.

## 🚀 Key Features
- **SONEY Estimate™:** Proprietary AI-based valuation algorithm.
- **Dynamic Map Search:** Spatial queries via Leaflet.js and MongoDB.
- **Mortgage Engine:** Real-time affordability calculator.
- **Agent Portal:** Lead tracking and automated email notifications via SendGrid.
- **SEO Optimized:** Full JSON-LD schema integration for Google Rich Snippets.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, React-Leaflet
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (NoSQL)
- **Deployment:** Vercel (Frontend), Render (Backend)

## 🔧 Installation & Setup
1. Clone the repo: `git clone https://github.com/youruser/soney.git`
2. Install root dependencies: `npm run install-all`
3. Add your `.env` variables (MONGO_URI, JWT_SECRET, SENDGRID_API_KEY).
4. Run the seed script: `node scripts/seedDatabase.js`
5. Start the dev server: `npm start`
