import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600 relative">
        {tour.image ? (
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            ✈️
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-primary-600 font-semibold">
          {tour.price} ₽
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {tour.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>📍 {tour.location}</span>
          <span>⏱️ {tour.duration} дней</span>
        </div>
        <Link
          to={`/tours/${tour.id}`}
          className="block w-full bg-primary-600 text-white text-center py-2 rounded-md hover:bg-primary-700 transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default TourCard

