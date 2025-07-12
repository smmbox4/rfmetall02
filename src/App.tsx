import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallModal from './components/CallModal';
import { CallModalProvider } from './contexts/CallModalContext';

function App() {
  return (
    <CallModalProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Calculator />
        <About />
        <Contact />
        <Footer />
        <CallModal />
      </div>
    </CallModalProvider>
  );
}

export default App;