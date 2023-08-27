import React from "react";
import useWindowSize from '../../hook/useWindowSize'

const ThirdComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;
    
    return (
        <div id="03" 
            className={`bg-local ${isMobile ? "h-[510.8vw]" : "h-[66.6vw]"} flex flex-col items-center justify-center`}
            style={
                isMobile 
                ? { backgroundImage: "url(/image/mobile3.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                : { backgroundImage: "url(/image/3.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <img src="/image/lil_banner2.jpg" className="max-w-[200px] md:max-w-[300px] m-6"></img>
            <span className="md:text-2xl pb-5  text-white font-bold">所以怎麼做呢？投資理財老師來解答！</span>
            <div className="flex flex-col md:flex-row max-w-[225px] md:max-w-[1110px] md:space-x-8">
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112281" target="_blank">
                    <img src="/image/slider-item-img5.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125860" target="_blank">
                    <img src="/image/slider-item-img6.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/Magazine/Info/%E7%90%86%E8%B2%A1%E5%91%A8%E5%88%8A/124402" target="_blank">
                    <img src="/image/slider-item-img7.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/127047" target="_blank">
                    <img src="/image/slider-item-img8.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
            </div>
        </div>
    )
}

export default ThirdComponent;