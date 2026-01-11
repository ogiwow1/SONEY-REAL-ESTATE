const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6199f7a099" 
        className="w-full h-full object-cover opacity-60" 
        alt="Modern Home"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 w-full max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
        Agents of <span className="text-blue-500">Change.</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8 font-light">
        Discover the most accurate listings and the legendary SONEY Estimate.
      </p>

      {/* High-Conversion Search Bar */}
      <div className="bg-white p-2 rounded-full shadow-2xl flex items-center max-w-2xl mx-auto">
        <input 
          type="text" 
          placeholder="Enter an address, neighborhood, or ZIP..." 
          className="flex-grow p-4 pl-8 rounded-full outline-none text-gray-800 text-lg"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

const ActionCards = () => (
  <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    <div className="group cursor-pointer text-center p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition">
      <div className="text-5xl mb-4">🏠</div>
      <h3 className="text-2xl font-bold mb-2">Buy a Home</h3>
      <p className="text-gray-500 mb-4">Find your place with an immersive photo experience and the most listings.</p>
      <button className="text-blue-600 font-semibold group-hover:underline">Search Homes →</button>
    </div>
    
    <div className="group cursor-pointer text-center p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition bg-blue-50">
      <div className="text-5xl mb-4">💰</div>
      <h3 className="text-2xl font-bold mb-2">Sell a Home</h3>
      <p className="text-gray-500 mb-4">No matter what path you take, we can help you navigate a successful sale.</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full">See Options</button>
    </div>

    <div className="group cursor-pointer text-center p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition">
      <div className="text-5xl mb-4">🏢</div>
      <h3 className="text-2xl font-bold mb-2">Rent a Home</h3>
      <p className="text-gray-500 mb-4">We’re creating a seamless online experience – from shopping to applying.</p>
      <button className="text-blue-600 font-semibold group-hover:underline">Find Rentals →</button>
    </div>
  </section>
);


import { Helmet } from "react-helmet";

const PropertySEO = ({ property }) => (
  <Helmet>
    <title>{`${property.beds} Bed ${property.baths} Bath Home in ${property.city} - SONEY`}</title>
    <meta name="description" content={`View this ${property.sqft} sqft home priced at $${property.price}. See the SONEY Zestimate, photos, and neighborhood details.`} />
    <meta property="og:title" content={`Home for sale: ${property.address}`} />
    <meta property="og:image" content={property.images[0]} />
    <meta property="og:type" content="website" />
    {/* JSON-LD Structured Data for Google Real Estate Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "RealEstateListing",
        "name": property.title,
        "datePosted": property.createdAt,
        "price": property.price,
        "priceCurrency": "USD",
        "address": property.address
      })}
    </script>
  </Helmet>
);
