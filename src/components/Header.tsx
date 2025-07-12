import React, { useState } from 'react';
import { Phone, Menu, X, MapPin, Clock, Mail } from 'lucide-react';
import { useCallModal } from '../contexts/CallModalContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useCallModal();

  const handleCallClick = () => {
    openModal('Заказать звонок');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Алматы, Казахстан</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@atlantsnabcity.kz</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span className="text-orange-300 font-semibold">Курс: 5.8 ₸/₽</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl mr-4">
              <span className="text-2xl font-bold">А</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                АТЛАНТ Снаб Сити
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">
                Поставка металлопроката из России
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Калькулятор
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Преимущества
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              О компании
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Контакты
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <div className="text-2xl font-bold text-blue-600">
                +7 (777) 777-77-77
              </div>
              <div className="text-sm text-gray-600">
                Бесплатная консультация
              </div>
            </div>
            
            <button
              onClick={handleCallClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 lg:px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Заказать звонок</span>
              <span className="sm:hidden">Звонок</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#calculator" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Калькулятор цен
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Преимущества
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="md:hidden pt-4 border-t border-gray-200">
                <div className="text-xl font-bold text-blue-600 mb-1">
                  +7 (777) 777-77-77
                </div>
                <div className="text-sm text-gray-600">
                  Бесплатная консультация
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;