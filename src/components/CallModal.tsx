import React, { useState, useEffect } from 'react';
import { X, Phone, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useCallModal } from '../contexts/CallModalContext';
import { submitLead } from '../services/bitrixService';

interface FormData {
  name: string;
  phone: string;
  comment: string;
}

const CallModal: React.FC = () => {
  const { isOpen, closeModal, formType, productData } = useCallModal();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', phone: '', comment: '' });
      setErrors({});
      setSubmitStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const leadData = {
        name: formData.name.trim(),
        phone: formatPhone(formData.phone.trim()),
        formType: formType,
        comment: formData.comment.trim(),
        productData: productData,
        source: 'Сайт АТЛАНТ Снаб Сити',
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      const result = await submitLead(leadData);
      
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          closeModal();
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Автоформатирование номера телефона
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
      
      // Форматирование для отображения
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl transform transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{formType}</h2>
            <p className="text-blue-100">
              Заполните форму и наш менеджер свяжется с вами в течение 15 минут!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Заявка отправлена! 🎉</h3>
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
                Произошла ошибка при отправке заявки. Попробуйте еще раз или позвоните нам напрямую.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Попробовать снова
                </button>
                <a
                  href="tel:+77012345678"
                  className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  📞 Позвонить: +7 (701) 234-56-78
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Info */}
              {productData && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Выбранный товар:</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>Товар:</strong> {productData.item?.name} {productData.item?.size}</p>
                    <p><strong>Количество:</strong> {productData.quantity} шт.</p>
                    <p><strong>Общий вес:</strong> {productData.totalWeight?.toFixed(2)} т</p>
                    <p><strong>Стоимость:</strong> {Math.round(productData.totalPrice || 0).toLocaleString()} ₸</p>
                  </div>
                </div>
              )}

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
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Отправляем заявку...
                  </span>
                ) : (
                  '📞 Заказать звонок'
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallModal;