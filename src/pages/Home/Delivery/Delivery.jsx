import delivery from "../../../assets/live-tracking.png"
import location from "../../../assets/location-merchant.png"
import safe from "../../../assets/safe-delivery.png"
import DeliveryCard from "../Delivery Card/DeliveryCard";


const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    icon: <img src={delivery} alt="" />,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <img src={location} alt="" />,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <img src={safe} alt="" />,
  },
];


const Delivery = () => {
  return (
   <div className="mx-auto px-4 py-16 space-y-6 border-y-4 border-black border-dotted">
      {features.map((item, index) => (
  <div key={index} className=""
        >
      <DeliveryCard item={item}></DeliveryCard>
        </div>
      ))}
    </div>
  )
}

export default Delivery
