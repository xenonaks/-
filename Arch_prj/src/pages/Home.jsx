import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Откройте мир с нами
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Лучшие туры по всему миру по доступным ценам
            </p>
            <Link
              to="/tours"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Найти тур
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🏖️</div>
            <h3 className="text-xl font-bold mb-2">Пляжный отдых</h3>
            <p className="text-gray-600">
              Расслабьтесь на лучших пляжах мира
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold mb-2">Экскурсии</h3>
            <p className="text-gray-600">
              Познакомьтесь с достопримечательностями
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎒</div>
            <h3 className="text-xl font-bold mb-2">Активный отдых</h3>
            <p className="text-gray-600">
              Приключения для любителей экстрима
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать путешествие?</h2>
          <p className="text-gray-600 mb-8">
            Присоединяйтесь к тысячам довольных туристов
          </p>
          <Link
            to="/register"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

