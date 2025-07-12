import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import About from './components/About';
import CalculatorCTA from './components/CalculatorCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallModal from './components/CallModal';
import Cart from './components/Cart';
import { CallModalProvider } from './contexts/CallModalContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <CallModalProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Hero />
          <Features />
          <Calculator />
          <About />
          <CalculatorCTA />
          <Contact />
          <Footer />
          <CallModal />
          <Cart />
        </div>
      </CallModalProvider>
    </CartProvider>
  );
}

export default App;