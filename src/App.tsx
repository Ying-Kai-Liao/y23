import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirstComponent from './components/mainComponents/FirstComponent';
import SecondComponent from './components/mainComponents/SecondComponent';
import ThirdComponent from './components/mainComponents/ThirdComponent';
import FourthComponent from './components/mainComponents/FourthComponent';
import FifthComponent from './components/mainComponents/FifthComponent';
import SixthComponent from './components/mainComponents/SixthComponent';
import SeventhComponent from './components/mainComponents/SeventhComponent';
import EighthComponent from './components/mainComponents/EighthComponent';
import AppBar from './components/appbar/AppBar';
import MarqueeHeader from './components/marquee/MarqueeHeader';
import FloatingButton from './components/floatingButton/FloatingButton';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className=''>
      <AppBar />

      <div className='relative w-screen min-h-screen mt-14'>
        <div className='fixed top-14 left-0 z-10 w-screen'>
        </div>      
        <FloatingButton />
        <FirstComponent/>
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <SixthComponent />
        <SeventhComponent />
        <EighthComponent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
