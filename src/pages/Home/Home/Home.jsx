import React from 'react'
import Banner from '../Banner/Banner'
import Service from '../Services/Service'
import Companies from '../Companies/companies'
import Delivery from '../Delivery/Delivery'
import Merchant from '../Merchant/Merchant'
import HowItWorks from '../How It Works/HowItWorks'

const Home = () => {
  return (
    <div>
<Banner></Banner>
<HowItWorks></HowItWorks>
<Service></Service>
<Companies></Companies>
<Delivery></Delivery>
<Merchant></Merchant>
    </div>
  )
}

export default Home
