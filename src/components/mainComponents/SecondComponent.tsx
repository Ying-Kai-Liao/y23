import React from "react";

const SecondComponent = () => {
    return (
        <div className="bg-local h-[66.6vw] flex flex-col items-center justify-center" style={{backgroundImage: "url(/image/2.jpg)"}}>
            <img src="/image/lil_banner1.jpg" className="max-w-[300px] m-6"></img>
            <span className="text-2xl pb-20">錢的問題，你不孤單....</span>
            <div className="flex flex-row max-w-[1110px] space-x-8 overflow-hidden">
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112281" className=" overflow-hidden">
                    <div className=" overflow-hidden flex items-center">
                        <img src="/image/slider-item-img1.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                    </div>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/125860" className=" overflow-hidden">
                    <img src="/image/slider-item-img2.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/Magazine/Info/%E7%90%86%E8%B2%A1%E5%91%A8%E5%88%8A/124402" className=" overflow-hidden">
                    <img src="/image/slider-item-img3.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/127047" className=" overflow-hidden">
                    <img src="/image/slider-item-img4.png" className=" hover:-translate-y-3 duration-500 ease-out"></img>
                </a>
            </div>
        </div>
    )
}

export default SecondComponent;