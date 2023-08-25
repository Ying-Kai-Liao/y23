import React from "react";

const FourthComponent = () => {
    return (
        <div className="bg-local h-[53.9vw] flex flex-col items-center justify-center" style={{backgroundImage: "url(/image/4.jpg)"}}>
            <img src="/image/lil_banner3.jpg" className="max-w-[300px] m-6"></img>
            <span className="text-2xl pb-20">23週年慶QA答題賺獎金，拿購物金再享優惠</span>
            <div className="flex flex-row max-w-[545px] space-x-8">
                <a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/112281">
                    <img src="/image/slider-item-img9.png" className="hover:-translate-y-3 hover:transition duration-500 ease-out"></img>
                </a>
            </div>
        </div>
    )
}

export default FourthComponent;