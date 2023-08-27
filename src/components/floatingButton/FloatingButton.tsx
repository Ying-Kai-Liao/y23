import React from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const FloatingButton = () => {
    return (
        <div className="fixed bottom-8 right-3 z-10">
        {/* Social buttons */}
        <div className="flex flex-col justify-center items-center">
            <a href="https://pse.is/56s6tl" target="_blank" rel="noopener noreferrer">
            <img src="/image/ad1.png" className="w-[80px] pb-2"></img>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <img src="/image/icon-FB.png" className="w-[40px] pb-4"></img>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <img src="/image/icon-line.png" className="w-[40px]"></img>
            </a>
        </div>
      </div>
    )
}

export default FloatingButton