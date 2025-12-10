
const DeliveryCard = ({item}) => {
  return (
    <div className='bg-white shadow-sm border rounded-xl p-8 flex items-start gap-6 hover:shadow-md transition'>
          {/* Icon */}
          <div className="p-4 rounded-xl flex items-center justify-center h-20 w-50 my-auto">
            {item.icon}
          </div>

          {/* Text */}
          <div className='border-l-2 border-gray-500 border-dotted pl-6 flex flex-col justify-center h-full min-h-40'>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
          </div>
    </div>
  )
}

export default DeliveryCard
