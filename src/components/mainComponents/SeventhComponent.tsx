import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";

const SeventhComponent = () => {
    const [counting, setCounting] = useState(false);

    const onVisibilityChange = (isVisible:boolean) => {
        if (isVisible) {
          setCounting(true);
        }
      };

    return (
        <div className="bg-local h-[65.9vw] flex flex-col items-center" style={{backgroundImage: "url(/image/7.jpg)"}}>
            <img src="/image/lil_banner6.png" className="max-w-[300px] m-6 md:mt-80"></img>
            <span className="text-2xl md:mb-56">
                自我們成立以來，已經服務了超過
                <VisibilitySensor onChange={onVisibilityChange}>
                {({ isVisible }: { isVisible: boolean }) => (
                    <span className="text-red-600 font-bold">
                        {counting ? <CountUp start={0} end={5298726} duration={10} separator="," /> : '0'}
                    </span>
                )}
                </VisibilitySensor>
                人。
            </span>
            <div className="flex flex-col text-lg text-white text-center items-center gap-10">
                <span>
                    理財周刊即是你最佳的投資理財夥伴<br />   
                    致力於提供高品質的理財知識和投資報告，希望能夠幫助更多的人實現財務自由和幸福生活。
                </span>
                <img src="/image/banner-overlay-img-about-word.png" className="max-w-[400px]"></img>
                <span>
                學會正確地投資和管理財務，從而穩健地營造自己的生活。<br />   
                我們鼓勵您訂閱我們的雜誌，以獲得最新的理財資訊、專家觀點和投資建議。<br />   
                這將是您獲取有關投資、財務管理和理財幸福的寶貴資源。<br />   
                謝謝您的支持，我們期待與您一起建立一個理財、理善、理健康的全民理財幸福島！
                </span>
                <div className="cursor-pointer max-w-[170px]">
                    <a href="https://www.moneyweekly.com.tw/Store/Info/%E9%9B%BB%E5%AD%90%E5%88%8A%E7%89%A9%E5%95%86%E5%93%81/339/" target="_blank">
                        <img src="/image/button.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SeventhComponent;