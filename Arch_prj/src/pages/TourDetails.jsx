import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const TourDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tour, setTour] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTour()
  }, [id])

  const fetchTour = async () => {
    try {
      const response = await axios.get(`/api/tours/${id}`)
      setTour(response.data)
    } catch (error) {
      console.error('Ошибка загрузки тура:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Загрузка...</div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Тур не найден</p>
          <button
            onClick={() => navigate('/tours')}
            className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700"
          >
            Вернуться к турам
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/tours')}
        className="text-primary-600 hover:text-primary-700 mb-4"
      >
        ← Назад к турам
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-96 bg-gradient-to-r from-primary-400 to-primary-600 relative">
          {tour.image ? (
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-6xl">
              ✈️
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{tour.title}</h1>
            <div className="text-3xl font-bold text-primary-600">
              {tour.price} ₽
            </div>
          </div>

          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <span>📍 {tour.location}</span>
            <span>⏱️ {tour.duration} дней</span>
            <span>👥 До {tour.maxPeople} человек</span>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Описание</h2>
            <p className="text-gray-700 leading-relaxed">{tour.description}</p>
          </div>

          {tour.itinerary && tour.itinerary.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Программа тура</h2>
              <ul className="space-y-2">
                {tour.itinerary.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Включено в стоимость:</h3>
            <ul className="space-y-2">
              {tour.includes?.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              )) || (
                <>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Проживание в отеле</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Питание (завтраки)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Экскурсии по программе</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            Забронировать тур
          </button>
        </div>
      </div>
    </div>
  )
}

export default TourDetails

