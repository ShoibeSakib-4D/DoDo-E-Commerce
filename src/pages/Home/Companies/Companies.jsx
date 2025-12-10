import React from 'react'
import amazon_vector from "../../../assets/brands/amazon_vector.png"
import amazon from "../../../assets/brands/amazon.png"
import  casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import start_people_1 from "../../../assets/brands/start-people 1.png"
import start from "../../../assets/brands/start.png"
import Marquee from 'react-fast-marquee'

const logos = [amazon_vector, amazon, casio, moonstar, randstad, start_people_1, start]

const Companies = () => {
  return (
      <div className="bg-gray-100 py-10 mt-7 mb-7 rounded-2xl">
      <h2 className="text-center text-xl font-semibold text-teal-900 mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee gradient={false} speed={50} pauseOnHover className="py-4">
        {
        logos.map((logo, index) => (
          <img  key={index}  src={logo}  alt="brand" className="h-6 mx-12 object-contain " />
        )
    )
        }
      </Marquee>
      
    </div>
  )
}

export default Companies
