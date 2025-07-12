import React from 'react';
import { Shield, Truck, Clock, Award, Users, MapPin, Zap, CheckCircle } from 'lucide-react';
import { useCallModal } from '../contexts/CallModalContext';

const Features: React.FC = () => {
  const { openModal } = useCallModal();

  const features = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Вся продукция сертифицирована и соответствует ГОСТ стандартам',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставка по всему Казахстану за 5-10 дней',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Работаем 24/7',
      description: 'Круглосуточная поддержка и обработка заявок',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Лучшие цены',
      description: 'Экономия до 15% благодаря прямым поставкам',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Более 5 лет опыта в поставках металлопроката',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Широкая география',
      description: 'Поставки во все регионы Казахстана',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 mb-8">
            <Zap className="h-7 w-7 text-blue-600 mr-3" />
            <span className="text-blue-700 font-bold text-xl">Почему выбирают нас</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Преимущества работы
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              с АТЛАНТ Снаб Сити
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы предлагаем комплексные решения для поставки металлопроката из России в Казахстан 
            с гарантией качества и конкурентными ценами
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 lg:p-16 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Наши достижения в цифрах</h3>
            <p className="text-xl text-blue-100">Результаты, которыми мы гордимся</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-300 mb-2">800+</div>
              <div className="text-blue-100 text-lg">позиций металлопроката</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-blue-100 text-lg">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">5000+</div>
              <div className="text-blue-100 text-lg">тонн поставлено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-300 mb-2">99%</div>
              <div className="text-blue-100 text-lg">довольных клиентов</div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h3>
            <p className="text-xl text-gray-600">
              Простой и понятный процесс от заявки до доставки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Заявка', desc: 'Оставляете заявку на сайте или звоните нам' },
              { step: '02', title: 'Расчет', desc: 'Рассчитываем стоимость и сроки доставки' },
              { step: '03', title: 'Договор', desc: 'Заключаем договор и принимаем оплату' },
              { step: '04', title: 'Доставка', desc: 'Доставляем металлопрокат в срок' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 text-center border border-orange-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Готовы начать сотрудничество?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Получите персональное коммерческое предложение с учетом ваших потребностей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('Получить коммерческое предложение')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                📋 Получить КП
              </button>
              <button
                onClick={() => openModal('Консультация специалиста')}
                className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-2xl text-lg font-bold transition-all"
              >
                💬 Консультация
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Индивидуальные условия</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Быстрый ответ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;