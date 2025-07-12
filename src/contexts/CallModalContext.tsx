import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CallModalContextType {
  isOpen: boolean;
  openModal: (formType?: string, productData?: any) => void;
  closeModal: () => void;
  formType: string;
  productData: any;
}

const CallModalContext = createContext<CallModalContextType | undefined>(undefined);

export const useCallModal = () => {
  const context = useContext(CallModalContext);
  if (!context) {
    throw new Error('useCallModal must be used within a CallModalProvider');
  }
  return context;
};

interface CallModalProviderProps {
  children: ReactNode;
}

export const CallModalProvider: React.FC<CallModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState('Заказать звонок');
  const [productData, setProductData] = useState(null);

  const openModal = (type = 'Заказать звонок', data = null) => {
    setFormType(type);
    setProductData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormType('Заказать звонок');
    setProductData(null);
  };

  return (
    <CallModalContext.Provider value={{ isOpen, openModal, closeModal, formType, productData }}>
      {children}
    </CallModalContext.Provider>
  );
};