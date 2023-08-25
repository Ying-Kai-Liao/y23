import React from "react";
import logo from "../../LOGO.png"
import { MdArrowDropDown } from "react-icons/md"
import { useState } from "react";

const AppBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
      };
    

    return (
        <nav className="flex bg-gray-100 px-3 py-2 sticky top-0 z-50 w-screen">
            <div className="flex flex-row items-center justify-start px-5 cursor-pointer">
                <a href="https://www.moneyweekly.com.tw/">
                    <img src="/image/logo-16.png" alt='logo' className="flex-shrink-0 h-[33px] max-h-full mr-2 my-1"></img>
                </a>
            </div>
            <div className="font-bold text-[18px] text-neutral-500 flex items-center px-8">
                <nav className="space-x-8">
                    <span className="hover:text-red-700 cursor-pointer">
                        <a href="#01">理財周刊23週年</a>
                    </span>
                    <span className="hover:text-red-700 cursor-pointer">
                        <a href="#section1">理周島民PTT</a>
                    </span>
                    <span className="hover:text-red-700 cursor-pointer">
                        <a href="#section1">名人幸福知識島</a>
                    </span>
                    <span className="hover:text-red-700 cursor-pointer">
                        <a href="#section1">幸福理財遊戲島</a>
                    </span>
                    <span className={`hover:text-red-700 cursor-pointer whitespace-nowrap inline-block relative`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <span className="inline-block flex items-center">幸福共學島 <MdArrowDropDown /></span>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-md rounded-md w-56 text-neutral-500 font-medium">
                                <div className="">
                                    <span className="px-4 py-2 block cursor-pointer hover:bg-gray-100 active:text-white active:bg-[#67B8A9]">
                                        <a href="#section1">幸福共學島(華生攻略)</a>
                                    </span>
                                    <span className="px-4 py-2 block cursor-pointer hover:bg-gray-100 active:text-white active:bg-[#67B8A9]">
                                        <a href="#section1">幸福共學島(理財指南)</a>
                                    </span>
                                </div>
                            </div>
                        )}
                    </span>
                </nav>
            </div>
        </nav>
    )
}

export default AppBar;