// src/components/ServicesSection.jsx

import ServiceCard from "./ServiceCard";

import {servicesData} from '../../../Data/ServiceData'

export default function ServicesSection() {
  return (
    <section className="bg-[#03333C] py-16 px-4 rounded-xl  mx-auto mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
        <p className="text-gray-200 max-w-xl mx-auto mt-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service = {service}
          />
        ))}
      </div>
    </section>
  );
}
