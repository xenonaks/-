import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Профиль пользователя</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl mr-4">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-bold mb-4">Информация об аккаунте</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Имя:</span>
              <span className="font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Дата регистрации:</span>
              <span className="font-medium">
                {user?.createdAt 
                  ? new Date(user.createdAt).toLocaleDateString('ru-RU')
                  : 'Недавно'}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Мои бронирования</h3>
          <p className="text-gray-600 mb-4">
            У вас пока нет забронированных туров.
          </p>
          <Link
            to="/tours"
            className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Посмотреть туры
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile

