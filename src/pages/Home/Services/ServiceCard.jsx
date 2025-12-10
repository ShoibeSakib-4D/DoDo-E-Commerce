// src/components/ServiceCard.jsx
import {
  FaTruck,
  FaGlobeAsia,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const iconMap = {
  truck: <FaTruck size={32} className="text-indigo-600" />,
  globe: <FaGlobeAsia size={32} className="text-indigo-600" />,
  warehouse: <FaWarehouse size={32} className="text-indigo-600" />,
  money: <FaMoneyBillWave size={32} className="text-indigo-600" />,
  building: <FaBuilding size={32} className="text-indigo-600" />,
  undo: <FaUndo size={32} className="text-indigo-600" />,
};

const ServiceCard = ({service}) =>{

   const { icon, title, description, highlight } = service;


  return (
    <div
      className= "rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300highlight hover:bg-lime-200 border bg-white"
    
    >
      <div className="mb-4 flex justify-center">{iconMap[icon]}</div>
      <h3 className="text-xl font-semibold text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 mt-2 text-center">{description}</p>
    </div>
  );
}

export default ServiceCard;
