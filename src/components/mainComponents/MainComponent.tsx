import React from 'react';

import AppBar from '../appbar/AppBar';
import FloatingButton from '../floatingButton/FloatingButton';
import MarqueeHeader from '../marquee/MarqueeHeader';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import FifthComponent from './FifthComponent';
import SixthComponent from './SixthComponent';
import SeventhComponent from './SeventhComponent';
import EighthComponent from './EighthComponent';

const MainComponent = () => {
    return (
        <div>
            <AppBar />
            <FloatingButton />
            <div className='fixed top-16 md:top-14 left-0 z-10 w-screen'>
                <MarqueeHeader />
            </div>
            <div>
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
                <FifthComponent />
                <SixthComponent />
                <SeventhComponent />
                <EighthComponent />
            </div>
        </div>
    )
}

export default MainComponent