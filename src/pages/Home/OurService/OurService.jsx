import React from 'react';

const OurService = () => {
  return (
    <div className="bg-[#073B3F] text-white rounded-3xl py-16 px-5 md:px-10 mt-10">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">
            Express & Standard Delivery
          </h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            We deliver parcels within 24–72 hours in major cities. Express
            delivery available in Dhaka within 4–6 hours.
          </p>
        </div>

        {/* CARD 2 — Highlighted */}
        <div className="bg-[#C7F26A] text-black rounded-3xl p-6 shadow-sm border border-lime-300">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">
            Nationwide Delivery
          </h3>
          <p className="text-gray-700 text-sm text-center mt-2">
            We deliver parcels nationwide with home delivery in every district,
            reaching customers within 48–72 hours.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">
            Fulfillment Solution
          </h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            Inventory management, order processing, packaging, and after-sales
            support.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">
            Cash on Home Delivery
          </h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            100% cash on delivery anywhere in Bangladesh with safety guarantee.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">
            Corporate Service / Contract
          </h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            Customized corporate logistics including warehouse & inventory
            support.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="bg-white text-black rounded-3xl p-6 shadow-sm">
          <div className="flex justify-center">
            <img src="/your-icon.png" className="w-12 h-12" />
          </div>
          <h3 className="font-bold text-lg text-center mt-4">Parcel Return</h3>
          <p className="text-gray-600 text-sm text-center mt-2">
            Reverse logistics for returning or exchanging products with
            merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;