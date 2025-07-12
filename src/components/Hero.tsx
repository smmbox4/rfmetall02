import React from 'react';
import { ArrowRight, Star, Award, Truck, Shield, Clock, TrendingUp } from 'lucide-react';
import { useCallModal } from '../contexts/CallModalContext';

const Hero: React.FC = () => {
  const { openModal } = useCallModal();

  const handleOrderClick = () => {
    openModal('Получить коммерческое предложение');
  };

  const handleCalculatorClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
              <Award className="h-6 w-6 text-orange-400 mr-3" />
              <span className="text-orange-300 font-bold text-lg">№1 поставщик металла в Казахстане</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Металлопрокат
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                из России
              </span>
              <br />
              <span className="text-white text-3xl sm:text-4xl lg:text-5xl">
                за 5-10 дней! 🚀
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
              Стальные круги, трубы, профильные трубы от ведущих заводов России. 
              <span className="text-orange-300 font-semibold"> Экономия до 50%</span> от рыночных цен!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">800+</div>
                <div className="text-blue-200 text-sm lg:text-base">позиций в наличии</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">5-10</div>
                <div className="text-blue-200 text-sm lg:text-base">дней доставка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">до 50%</div>
                <div className="text-blue-200 text-sm lg:text-base">экономия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-200 text-sm lg:text-base">поддержка</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleOrderClick}
                className="group bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 hover:from-orange-700 hover:via-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  📞 Получить КП сейчас
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={handleCalculatorClick}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105"
              >
                🧮 Рассчитать стоимость
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-blue-200">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Гарантия качества</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm">Доставка по РК</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-400 mr-2" />
                  <span className="text-sm">Быстрая отгрузка</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая доставка</h3>
              <p className="text-blue-200">Доставка металлопроката по всему Казахстану за 5-10 дней</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Лучшие цены</h3>
              <p className="text-blue-200">Экономия до 15% благодаря прямым поставкам от заводов</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество ГОСТ</h3>
              <p className="text-blue-200">Вся продукция соответствует российским и казахстанским стандартам</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Надежность</h3>
              <p className="text-blue-200">Более 5 лет успешной работы на рынке металлопроката</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              🔥 Специальное предложение для новых клиентов!
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Скидка <span className="text-orange-300 font-bold">до 50%</span> на первый заказ + бесплатная консультация по подбору металлопроката
            </p>
            <button
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              Получить скидку до 50% 🎁
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;