import React from "react";
import useWindowSize from '../../hook/useWindowSize'

const SecondComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;
    console.log(isMobile)

    return (
        <div id="02"
            className={`bg-local ${isMobile ? "h-[510.8vw]" : "h-[66.6vw]"} flex flex-col items-center justify-center`}
            style={
                isMobile
                    ? { backgroundImage: "url(/image/mobile2.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                    : { backgroundImage: "url(/image/2.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <img src="/image/lil_banner1.jpg" className="max-w-[200px] md:max-w-[300px] m-6"></img>
            <span className="md:text-2xl pb-5  text-white font-bold">錢的問題，你不孤單....</span>
            <div className="flex flex-col items-center md:flex-row max-w-[225px] md:max-w-[1110px] md:space-x-8 overflow-hidden">
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112281" className=" overflow-hidden" target="_blank">
                    <div className=" overflow-hidden flex items-center">
                        <img src="/image/slider-item-img1.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                    </div>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125860" className=" overflow-hidden" target="_blank">
                    <div className=" overflow-hidden flex items-center">
                        <img src="/image/slider-item-img2.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                    </div>
                </a>
                <a href="https://www.moneyweekly.com.tw/Magazine/Info/%E7%90%86%E8%B2%A1%E5%91%A8%E5%88%8A/124402" className=" overflow-hidden" target="_blank">
                    <div className=" overflow-hidden flex items-center">
                        <img src="/image/slider-item-img3.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                    </div>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/127047" className=" overflow-hidden" target="_blank">
                    <div className=" overflow-hidden flex items-center">
                        <img src="/image/slider-item-img4.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SecondComponent;