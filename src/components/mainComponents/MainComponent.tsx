import React from 'react';

import AppBar from '../appbar/AppBar';
import FloatingButton from '../floatingButton/FloatingButton';

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