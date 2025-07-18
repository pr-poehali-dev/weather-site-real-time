import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const currentWeather = {
    city: "Москва",
    temperature: 22,
    condition: "Переменная облачность",
    humidity: 65,
    windSpeed: 12,
    pressure: 1013
  };

  const forecast = [
    { day: "Сегодня", high: 24, low: 18, icon: "Cloud" },
    { day: "Завтра", high: 26, low: 20, icon: "Sun" },
    { day: "Пт", high: 23, low: 17, icon: "CloudRain" },
    { day: "Сб", high: 21, low: 15, icon: "CloudRain" },
    { day: "Вс", high: 25, low: 19, icon: "Sun" }
  ];

  const favoriteCities = [
    { name: "Санкт-Петербург", temp: 18, condition: "Дождь" },
    { name: "Новосибирск", temp: 15, condition: "Облачно" },
    { name: "Екатеринбург", temp: 20, condition: "Ясно" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-weather-blue via-white to-weather-green">
      {/* Header */}
      <header className="p-6 border-b border-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Cloud" size={32} className="text-weather-green" />
            <h1 className="text-2xl font-bold text-gray-900">Погода.сайт</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-gray-700 hover:text-weather-green">
              Главная
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-weather-green">
              Карта погоды
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-weather-green">
              Избранное
            </Button>
          </nav>
          <Icon name="User" size={24} className="text-gray-600" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Current Weather */}
        <section className="text-center py-12">
          <div className="inline-flex items-center space-x-4 mb-6">
            <Icon name="MapPin" size={24} className="text-weather-green" />
            <h2 className="text-3xl font-bold text-gray-900">{currentWeather.city}</h2>
          </div>
          
          <div className="mb-8">
            <div className="text-6xl font-light text-gray-900 mb-2">
              {currentWeather.temperature}°
            </div>
            <p className="text-xl text-gray-600">{currentWeather.condition}</p>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={16} />
              <span>{currentWeather.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Wind" size={16} />
              <span>{currentWeather.windSpeed} км/ч</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Gauge" size={16} />
              <span>{currentWeather.pressure} гПа</span>
            </div>
          </div>
        </section>

        {/* 5-Day Forecast */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Прогноз на 5 дней</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {forecast.map((day, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 mb-2">{day.day}</p>
                  <Icon name={day.icon as any} size={32} className="mx-auto mb-3 text-weather-blue" />
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-gray-900">{day.high}°</p>
                    <p className="text-sm text-gray-600">{day.low}°</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weather Map */}
          <section>
            <Card className="bg-white/80 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Map" size={24} className="text-weather-green" />
                  <span>Карта погоды</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-weather-blue/20 to-weather-green/20 rounded-lg flex items-center justify-center border-2 border-dashed border-weather-green/30">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="mx-auto mb-4 text-weather-green" />
                    <p className="text-gray-600 mb-4">Интерактивная карта погоды</p>
                    <Button className="bg-weather-green hover:bg-weather-green/90">
                      Открыть карту
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Favorite Cities */}
          <section>
            <Card className="bg-white/80 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={24} className="text-weather-green" />
                    <span>Избранные города</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-weather-green text-weather-green hover:bg-weather-green hover:text-white">
                    <Icon name="Plus" size={16} className="mr-1" />
                    Добавить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {favoriteCities.map((city, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{city.name}</p>
                      <p className="text-sm text-gray-600">{city.condition}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-semibold text-gray-900">{city.temp}°</p>
                      <Badge variant="secondary" className="text-xs bg-weather-blue/20 text-weather-blue border-weather-blue/30">
                        Обновлено
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Быстрые действия</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-weather-blue hover:bg-weather-blue/90 text-white">
              <Icon name="Search" size={16} className="mr-2" />
              Найти город
            </Button>
            <Button variant="outline" className="border-weather-green text-weather-green hover:bg-weather-green hover:text-white">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить данные
            </Button>
            <Button variant="outline" className="border-weather-blue text-weather-blue hover:bg-weather-blue hover:text-white">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto p-6 text-center text-gray-600">
          <p>&copy; 2024 Погода.сайт - Точная погода в реальном времени</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;