import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PriceItem } from '../data/priceData';

export interface CartItem {
  id: string;
  item: PriceItem;
  quantity: number;
  tons: number;
  totalWeight: number;
  pricePerTon: number;
  totalPrice: number;
  priceCategory: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: PriceItem, quantity: number, tons: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getTotalWeight: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Загружаем корзину из localStorage при инициализации
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
      }
    }
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: PriceItem, quantity: number, tons: number) => {
    const totalWeight = tons;
    const pricePerTon = calculatePrice(item, totalWeight);
    const totalPrice = pricePerTon * totalWeight;
    const priceCategory = totalWeight >= 15 ? 'Цена > 15 т.' : 
                         totalWeight >= 5 ? 'Цена 5 - 15 т.' : 
                         'Цена 1 - 5 т.';

    const cartItem: CartItem = {
      id: `${item.id}_${Date.now()}`,
      item,
      quantity,
      tons,
      totalWeight,
      pricePerTon,
      totalPrice,
      priceCategory
    };

    setItems(prev => [...prev, cartItem]);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.length;
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const getTotalWeight = () => {
    return items.reduce((total, item) => total + item.totalWeight, 0);
  };

  // Функция расчета цены с учетом всех наценок
  const calculatePrice = (item: PriceItem, tons: number): number => {
    // Конфигурация для расчета цен
    const PRICE_CONFIG = {
      VAT_RATE: 0.12, // НДС 12%
      MARKUP_RATE: 0.30, // Наценка 30%
      EXCHANGE_RATE_MARKUP: 1.0, // Добавка к курсу +1
      BASE_EXCHANGE_RATE: 5.8 // Базовый курс
    };

    // Получаем базовую цену в зависимости от объема
    let basePrice: number;
    if (tons >= 15) {
      basePrice = item.priceOver15;
    } else if (tons >= 5) {
      basePrice = item.price5to15;
    } else {
      basePrice = item.price1to5;
    }

    // Убираем НДС из базовой цены
    const priceWithoutVAT = basePrice / (1 + PRICE_CONFIG.VAT_RATE);
    
    // Добавляем НДС и наценку
    const finalPriceRub = priceWithoutVAT * (1 + PRICE_CONFIG.VAT_RATE) * (1 + PRICE_CONFIG.MARKUP_RATE);
    
    // Конвертируем в тенге с учетом курса + добавка
    const exchangeRate = PRICE_CONFIG.BASE_EXCHANGE_RATE + PRICE_CONFIG.EXCHANGE_RATE_MARKUP;
    const finalPriceTenge = finalPriceRub * exchangeRate;

    return Math.round(finalPriceTenge);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalPrice,
      getTotalWeight
    }}>
      {children}
    </CartContext.Provider>
  );
};