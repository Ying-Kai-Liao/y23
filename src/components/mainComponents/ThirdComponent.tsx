import React from "react";

const ThirdComponent = () => {
    return (
        <div className="bg-local h-[66.6vw] flex flex-col items-center justify-center" style={{backgroundImage: "url(/image/3.jpg)"}}>
            <img src="/image/lil_banner2.jpg" className="max-w-[300px] m-6"></img>
            <span className="text-2xl pb-20">所以怎麼做呢？投資理財老師來解答！</span>
            <div className="flex flex-row max-w-[1110px] space-x-8">
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112281">
                    <img src="/image/slider-item-img5.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125860">
                    <img src="/image/slider-item-img6.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/Magazine/Info/%E7%90%86%E8%B2%A1%E5%91%A8%E5%88%8A/124402">
                    <img src="/image/slider-item-img7.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/127047">
                    <img src="/image/slider-item-img8.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
            </div>
        </div>
    )
}

export default ThirdComponent;