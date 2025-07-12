import React, { useState } from 'react';
import { ShoppingCart, X, Trash2, Package, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { submitLead } from '../services/bitrixService';

interface FormData {
  name: string;
  phone: string;
  comment: string;
}

const Cart: React.FC = () => {
  const { items, removeFromCart, clearCart, getTotalItems, getTotalPrice, getTotalWeight } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11 && cleaned.startsWith('8')) {
      return '+7' + cleaned.slice(1);
    } else if (cleaned.length === 10) {
      return '+7' + cleaned;
    } else if (cleaned.length === 11 && cleaned.startsWith('7')) {
      return '+' + cleaned;
    }
    return phone;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    let formatted = value.replace(/\D/g, '');
    
    if (formatted.length > 0) {
      if (formatted.startsWith('8')) {
        formatted = '7' + formatted.slice(1);
      }
      if (!formatted.startsWith('7')) {
        formatted = '7' + formatted;
      }
      
      if (formatted.length > 11) {
        formatted = formatted.slice(0, 11);
      }
      
      if (formatted.length >= 1) {
        formatted = '+' + formatted;
      }
      if (formatted.length >= 5) {
        formatted = formatted.slice(0, 2) + ' (' + formatted.slice(2, 5) + ') ' + formatted.slice(5);
      }
      if (formatted.length >= 12) {
        formatted = formatted.slice(0, 10) + '-' + formatted.slice(10, 12) + '-' + formatted.slice(12);
      }
    }
    
    handleInputChange('phone', formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const cartData = items.map(item => ({
        name: `${item.item.name} ${item.item.size}`,
        quantity: item.quantity,
        tons: item.tons,
        totalWeight: item.totalWeight,
        pricePerTon: item.pricePerTon,
        totalPrice: item.totalPrice,
        priceCategory: item.priceCategory,
        branch: item.item.branch,
        gost: item.item.gost
      }));

      const leadData = {
        name: formData.name.trim(),
        phone: formatPhone(formData.phone.trim()),
        formType: 'Заказ из корзины',
        comment: formData.comment.trim(),
        productData: {
          cart: cartData,
          totalItems: getTotalItems(),
          totalWeight: getTotalWeight(),
          totalPrice: getTotalPrice()
        },
        source: 'Сайт АТЛАНТ МЕТАЛЛ',
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      const result = await submitLead(leadData);
      
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          clearCart();
          setShowOrderForm(false);
          setIsOpen(false);
          setFormData({ name: '', phone: '', comment: '' });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>
    );
  }

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40"
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
              {getTotalItems()}
            </span>
          )}
        </div>
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 flex justify-between items-center">
              <div className="flex items-center">
                <ShoppingCart className="h-8 w-8 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold">Корзина</h2>
                  <p className="text-orange-100">{getTotalItems()} товаров на сумму {Math.round(getTotalPrice()).toLocaleString()} ₸</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-200px)] overflow-y-auto">
              {!showOrderForm ? (
                <>
                  {items.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-600 mb-2">Корзина пуста</h3>
                      <p className="text-gray-500">Добавьте товары из калькулятора</p>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="space-y-4 mb-6">
                        {items.map((cartItem) => (
                          <div key={cartItem.id} className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <h4 className="font-bold text-lg text-gray-900 mb-1">
                                  {cartItem.item.name} {cartItem.item.size}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">{cartItem.item.gost}</p>
                                <div className="flex flex-wrap gap-2">
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                    {cartItem.priceCategory}
                                  </span>
                                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                    {cartItem.item.branch}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(cartItem.id)}
                                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Количество:</p>
                                <p className="font-bold">{cartItem.quantity} шт.</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Вес:</p>
                                <p className="font-bold">{cartItem.tons.toFixed(2)} т</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Цена за тонну:</p>
                                <p className="font-bold">{Math.round(cartItem.pricePerTon).toLocaleString()} ₸</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Сумма:</p>
                                <p className="font-bold text-lg text-orange-600">{Math.round(cartItem.totalPrice).toLocaleString()} ₸</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-gray-600 mb-1">Общий вес:</p>
                            <p className="text-2xl font-bold text-blue-700">{getTotalWeight().toFixed(2)} т</p>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">Количество позиций:</p>
                            <p className="text-2xl font-bold text-green-700">{getTotalItems()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 mb-1">Общая сумма:</p>
                            <p className="text-3xl font-bold text-orange-600">{Math.round(getTotalPrice()).toLocaleString()} ₸</p>
                          </div>
                        </div>
                      </div>

                      {/* Price Notice */}
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl mb-6">
                        <p className="text-yellow-800 text-center font-medium">
                          ⚠️ Актуальность цен уточняйте у менеджера
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => setShowOrderForm(true)}
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                          📞 Заказать всё
                        </button>
                        <button
                          onClick={clearCart}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-4 rounded-2xl font-bold transition-all"
                        >
                          🗑️ Очистить корзину
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                /* Order Form */
                <div>
                  {submitStatus === 'success' ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Заказ отправлен! 🎉</h3>
                      <p className="text-gray-600 mb-6">
                        Наш менеджер свяжется с вами в течение <strong>15 минут</strong>
                      </p>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="text-blue-700 font-medium">
                          📞 Ожидайте звонка на номер: <br />
                          <span className="text-lg font-bold">{formData.phone}</span>
                        </p>
                      </div>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="text-center py-8">
                      <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="h-12 w-12 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ошибка отправки</h3>
                      <p className="text-gray-600 mb-6">
                        Произошла ошибка при отправке заказа. Попробуйте еще раз или позвоните нам напрямую.
                      </p>
                      <div className="space-y-3">
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Попробовать снова
                        </button>
                        <a
                          href="tel:+77777777777"
                          className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-center"
                        >
                          📞 Позвонить: +7 (777) 777-77-77
                        </a>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Оформление заказа</h3>
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-blue-700">
                            <strong>Заказ:</strong> {getTotalItems()} позиций на сумму {Math.round(getTotalPrice()).toLocaleString()} ₸
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="inline h-4 w-4 mr-1" />
                            Ваше имя *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/50 transition-all ${
                              errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                            }`}
                            placeholder="Введите ваше имя"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone className="inline h-4 w-4 mr-1" />
                            Номер телефона *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/50 transition-all ${
                              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                            }`}
                            placeholder="+7 (___) ___-__-__"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>

                        {/* Comment Field */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <MessageSquare className="inline h-4 w-4 mr-1" />
                            Комментарий (необязательно)
                          </label>
                          <textarea
                            value={formData.comment}
                            onChange={(e) => handleInputChange('comment', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                            placeholder="Дополнительная информация..."
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <Loader className="animate-spin h-5 w-5 mr-2" />
                                Отправляем заказ...
                              </span>
                            ) : (
                              <span className="flex items-center justify-center">
                                <Send className="h-5 w-5 mr-2" />
                                Отправить заказ
                              </span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowOrderForm(false)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-4 rounded-xl font-bold transition-all"
                          >
                            Назад
                          </button>
                        </div>

                        {/* Privacy Notice */}
                        <p className="text-xs text-gray-500 text-center">
                          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                        </p>
                      </form>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;