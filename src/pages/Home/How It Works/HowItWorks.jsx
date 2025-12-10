import React from 'react'
import bookingIcon from "../../../assets/bookingIcon.png"
const HowItWorks = () => {

    const steps = [
  {
   
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
   
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
  
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  }
];

  return (
   <section className="bg-gray-100 py-16">
      <div className="container mx-auto lg:px-8">
        <h2 className="text-2xl text-black font-bold mb-10">How it Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 border hover:shadow-lg transition"
            >
              <img src={ bookingIcon} alt="" className="w-10 mb-4" />

              <h3 className="font-semibold text-black text-lg mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
