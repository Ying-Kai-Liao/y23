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
import FloatingButton from './components/floatingButton/FloatingButton';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <AppBar />
      <FloatingButton />
      <div className='w-screen min-h-screen'>
          <div className=' overflow-hidden'>
            <FirstComponent/>
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <SixthComponent />
            <SeventhComponent />
            <EighthComponent />
          </div>
          <Footer />
      </div>
    </div>
  );
};

export default App;
