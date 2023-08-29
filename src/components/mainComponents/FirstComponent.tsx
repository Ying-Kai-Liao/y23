import React, { useState } from "react";
import useWindowSize from '../../hook/useWindowSize'

const FirstComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;

    const handleClick = (id: string) => {
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
                    ? { backgroundImage: "url(/image/2-0.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                    : { backgroundImage: "url(/image/1-0.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            {isMobile ? (
                <>
                    
                <div className="relative">
                    <img
                        id="image2" src="/image/1-2.png" alt="幸福理財遊戲島"
                        className={`absolute w-[42vw] h-[30vw] top-[18vw] right-[30vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.5s_0.8s_ease-in-out_infinite]`}
                        onClick={() => handleClick('04')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image1" src="/image/1-1.png" alt="名人幸福知識島"
                        className={`absolute w-[43.4vw] h-[37.8vw] top-[30vw] right-[2vw]
                                transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                                animate-[float_3s_1s_ease-in-out_infinite]`}
                        onClick={() => handleClick('03')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image4" src="/image/1-4.png" alt="理周島民ptt"
                        className={`absolute w-[54vw] h-[42vw] top-[38vw] right-[48vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.8s_0.3s_ease-in-out_infinite]`}
                        onClick={() => handleClick('02')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image3" src="/image/1-3.png" alt="幸福共學島"
                        className={`absolute w-[69.2vw] h-[55.4vw] top-[66vw] right-[17vw]
                            transition-all duration-500 ease-in-out hover:animate-none hover:scale-90 
                            animate-[float_3s_0.1s_ease-in-out_infinite]`}
                        onClick={() => handleClick('05')}
                    />
                </div>

                <div className="relative">
                    <img
                        id="image3" src="/image/2-5.png" alt="打造"
                        className={`absolute w-[91.8vw] h-[29.6vw] top-[105vw] right-[2vw]
                            transition-all duration-500 
                            `}
                        onClick={() => handleClick('05')}
                    />
                </div>
                </>
            ) : (<>
                <div className="relative">
                    <img
                        id="image1" src="/image/1-1.png" alt="名人幸福知識島"
                        className={`absolute w-[28.1vw] h-[24.3vw] top-[10.5vw] right-[2vw]
                                transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                                animate-[float_3s_1s_ease-in-out_infinite]`}
                        onClick={() => handleClick('03')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image2" src="/image/1-2.png" alt="幸福理財遊戲島"
                        className={`absolute w-[27.5vw] h-[19.2vw] top-[6.8vw] right-[35.5vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.5s_0.8s_ease-in-out_infinite]`}
                        onClick={() => handleClick('04')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image4" src="/image/1-4.png" alt="理周島民ptt"
                        className={`absolute w-[34.9vw] h-[26.5vw] top-[12vw] right-[61.2vw]
                            transition-all duration-500 ease-in-out hover:scale-90 hover:animate-none 
                            animate-[float_3.8s_0.3s_ease-in-out_infinite]`}
                        onClick={() => handleClick('02')}
                    />
                </div>
                <div className="relative">
                    <img
                        id="image3" src="/image/1-3.png" alt="幸福共學島"
                        className={`absolute w-[44.7vw] h-[35.8vw] top-[19.5vw] right-[25.8vw]
                            transition-all duration-500 ease-in-out hover:animate-none hover:scale-90 
                            animate-[float_3s_0.1s_ease-in-out_infinite]`}
                        onClick={() => handleClick('05')}
                    />
                </div>

                <div className="relative">
                    <img
                        id="image3" src="/image/1-5.png" alt="打造"
                        className={`absolute w-[70.4vw] h-[24.1vw] top-[41.5vw] right-[10.8vw]
                            transition-all duration-500 
                            `}
                        onClick={() => handleClick('05')}
                    />
                </div>
                </>
            )}
        </div>
    )
}

export default FirstComponent;