import React from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const FloatingButton = () => {
    return (
        <div className="fixed bottom-4 right-4 z-10">
        {/* Social buttons */}
        <div className="flex flex-col justify-center items-center space-y-8">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/image/ad1.png" className="w-[80px]"></img>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FaFacebook size={48} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FaTwitter size={48} />
            </a>
        </div>
      </div>
    )
}

export default FloatingButton