import React from "react";
import useWindowSize from '../../hook/useWindowSize'

const FourthComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;

    return (
        <div id="04" 
            className={`bg-local ${isMobile ? "h-[123.1vw]" : "h-[53.9vw]"} flex flex-col items-center justify-center`}
            style={
                isMobile 
                ? { backgroundImage: "url(/image/mobile4.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                : { backgroundImage: "url(/image/4.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <img src="/image/lil_banner3.jpg" className="max-w-[200px] md:max-w-[300px] m-6"></img>
            <span className="md:text-2xl md:pb-20  text-white font-bold">23週年慶QA答題賺獎金，拿購物金再享優惠</span>
            <div className="flex flex-row max-w-[360px] md:max-w-[545px] space-x-8">
                <a href="/game">
                    <img src="/image/slider-item-img9.png" className="hover:-translate-y-3 hover:transition duration-500 ease-out"></img>
                </a>
            </div>
        </div>
    )
}

export default FourthComponent;