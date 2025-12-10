import React from 'react'

import merchant from "../../../assets/location-merchant.png"

const Merchant = () => {
  return (
   <div className="hero bg-[#03373D] my-4 rounded-2xl py-12 ">

  <div className="hero-content w-full flex-col lg:flex-row-reverse lg:justify-between">

    <img
      src= {merchant}
      className="max-w-sm rounded-lg  h-40 "
    />

    <div>

     <div className=''>
         <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. <br /> Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
     </div>

      <div className='flex gap-2'>
        <button className="btn btn-primary rounded-full bg-[#CAEB66] text-black border-0">Become a Merchant</button>
      <button className="btn btn-primary rounded-full border-[#CAEB66] text-[#CAEB66] btn-outline">Earn with Profast Courier</button>
      </div>

    </div>

  </div>

</div>
  )
}

export default Merchant
