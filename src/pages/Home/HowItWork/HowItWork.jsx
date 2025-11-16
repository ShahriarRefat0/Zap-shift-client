import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const HowItWork = () => {
  return (
    <div className="my-15">
      {/* Section Title */}
      <div className="text-start py-5 pl-5 md:pl-10 text-secondary">
        <h2 className="font-bold text-2xl md:text-3xl">How it Works</h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 md:px-10">
        {/* Card 1 */}
        <div className="card bg-white h-auto w-full space-y-3 p-5 rounded-3xl shadow-sm hover:shadow-md transition">
          <TbTruckDelivery size={45} />
          <h3 className="font-bold text-lg">Booking Pick & Drop</h3>
          <p className="text-sm  ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-white h-auto w-full space-y-3 p-5 rounded-3xl shadow-sm hover:shadow-md transition">
          <TbTruckDelivery size={45} />
          <h3 className="font-bold text-lg">Cash On Delivery</h3>
          <p className="text-sm  ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-white h-auto w-full space-y-3 p-5 rounded-3xl shadow-sm hover:shadow-md transition">
          <TbTruckDelivery size={45} />
          <h3 className="font-bold text-lg">Delivery Hub</h3>
          <p className="text-sm  ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="card bg-white h-auto w-full space-y-3 p-5 rounded-3xl shadow-sm hover:shadow-md transition">
          <TbTruckDelivery size={45} />
          <h3 className="font-bold text-lg">Booking SME & Corporate</h3>
          <p className="text-sm  ">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;