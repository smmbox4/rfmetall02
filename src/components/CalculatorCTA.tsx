import React from 'react';
import { Calculator, Phone, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';
import { useCallModal } from '../contexts/CallModalContext';

const CalculatorCTA: React.FC = () => {
  const { openModal } = useCallModal();

  const handleCalculatorClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    openModal('Рассчитать стоимость и заказать звонок');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-4 mb-8">
              <Calculator className="h-8 w-8 text-white mr-3" />
              <span className="text-white font-bold text-xl">Узнайте точную стоимость</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Рассчитайте стоимость
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                за 30 секунд! ⚡
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Воспользуйтесь нашим калькулятором для точного расчета стоимости металлопроката 
              с учетом актуальных цен и курса валют
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Точный расчет</h3>
              <p className="text-orange-100">
                Калькулятор учитывает все факторы: объем, курс валют, доставку
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Экономия до 50%</h3>
              <p className="text-orange-100">
                Прямые поставки от заводов без посредников
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">800+ позиций</h3>
              <p className="text-orange-100">
                Широкий ассортимент металлопроката в наличии
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleCalculatorClick}
              className="group bg-white hover:bg-gray-50 text-orange-600 px-12 py-6 rounded-3xl text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center">
                🧮 Открыть калькулятор
                <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <div className="text-white text-xl font-medium">или</div>
            
            <button
              onClick={handleCallClick}
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-6 rounded-3xl text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl border-2 border-white/30"
            >
              <span className="flex items-center">
                📞 Заказать звонок
                <Phone className="ml-4 h-8 w-8 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">5-10 дней</div>
                <div className="text-orange-100">доставка по Казахстану</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                <div className="text-orange-100">поддержка клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">ГОСТ</div>
                <div className="text-orange-100">сертифицированная продукция</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;