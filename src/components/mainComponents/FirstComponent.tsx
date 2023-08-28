import React, { useState } from "react";
import useWindowSize from '../../hook/useWindowSize'

const FirstComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;

    const handleClick = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          });
        }
      };

    return (
        <div
            id="01" className={`bg-local ${isMobile ? "h-[137.7vw]" : "h-[66.6vw]"}`}
            style={
                isMobile
                    ? { backgroundImage: "url(/image/mobile1.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                    : { backgroundImage: "url(/image/1-0.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <div className="relative hidden md:block">
                <img
                    id="image1" src="/image/1-1.png" alt="名人幸福知識島"
                    className={`absolute w-[28.1vw] h-[24.3vw] top-[10.5vw] right-[2vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3s_1s_ease-in-out_infinite]`}
                            onClick={()=> handleClick('03')}
                />
                {/* <button
                    className="absolute top-[15.5vw] right-[3vw] 
                            bg-transparent text-black w-[25vw] h-[15vw]"
                    onClick={() => console.log(1)}
                    onMouseEnter={() => document.getElementById('image1')?.classList.add('scale-110')}
                    onMouseLeave={() => document.getElementById('image1')?.classList.remove('scale-110')}
                >
                </button> */}
            </div>
            <div className="relative hidden md:block">
                <img
                    id="image2" src="/image/1-2.png" alt="幸福理財遊戲島"
                    className={`absolute w-[27.5vw] h-[19.2vw] top-[6.8vw] right-[35.5vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.5s_0.8s_ease-in-out_infinite]`}
                    onClick={()=> handleClick('04')}
                />
                {/* <button
                    className="absolute top-[9vw] right-[38vw] 
                            bg-transparent text-black w-[18vw] h-[15vw]"
                    onClick={() => console.log(2)}       
                    onMouseEnter={() => document.getElementById('image2')?.classList.add('scale-110,animate-none')}
                    onMouseLeave={() => document.getElementById('image2')?.classList.remove('scale-110,animate-none')}
                >
                </button> */}
            </div>
            <div className="relative hidden md:block">
                <img
                    id="image4" src="/image/1-4.png" alt="理周島民ptt"
                    className={`absolute w-[34.9vw] h-[26.5vw] top-[12vw] right-[61.2vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.8s_0.3s_ease-in-out_infinite]`}
                            onClick={()=> handleClick('02')}
                />
                {/* <button
                    className="absolute top-[13vw] right-[65vw] 
                            bg-transparent text-black w-[27vw] h-[20vw]"
                    onClick={() => console.log(4)}
                    onMouseEnter={() => document.getElementById('image4')?.classList.add('scale-110')}
                    onMouseLeave={() => document.getElementById('image4')?.classList.remove('scale-110')}
                >
                </button> */}
            </div>
            <div className="relative hidden md:block">
                <img
                    id="image3" src="/image/1-3.png" alt="幸福共學島"
                    className={`absolute w-[44.7vw] h-[35.8vw] top-[19.5vw] right-[25.8vw]
                            transition-all duration-500 ease-in-out hover:animate-none hover:scale-90 
                            animate-[float_3s_0.1s_ease-in-out_infinite]`}
                            onClick={()=> handleClick('05')}
                />
                {/* <button
                    className="absolute top-[25vw] right-[30vw] 
                            bg-transparent text-black w-[35vw] h-[25vw]" 
                    onClick={() => console.log(3)}
                    onMouseEnter={() => document.getElementById('image3')?.classList.add('scale-110')}
                    onMouseLeave={() => document.getElementById('image3')?.classList.remove('scale-110')}
                >
                </button> */}
            </div>

            <div className="relative hidden md:block">
                <img
                    id="image3" src="/image/1-5.png" alt="打造"
                    className={`absolute w-[70.4vw] h-[24.1vw] top-[41.5vw] right-[10.8vw]
                            transition-all duration-500 
                            `}
                            onClick={()=> handleClick('05')}
                />
            </div>
        </div>
    )
}

export default FirstComponent;