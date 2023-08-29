import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";
import useWindowSize from '../../hook/useWindowSize'

const SeventhComponent = () => {
    const [counting, setCounting] = useState(false);

    const onVisibilityChange = (isVisible: boolean) => {
        if (isVisible) {
            setCounting(true);
        }
    };

    const size = useWindowSize()
    const isMobile = size.width <= 768;

    return (
        <div id="07"
            className={`bg-local ${isMobile ? "h-[208.4vw]" : "h-[65.9vw]"} flex flex-col items-center justify-center`}
            style={
                isMobile
                    ? { backgroundImage: "url(/image/mobile7.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                    : { backgroundImage: "url(/image/7.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <img src="/image/lil_banner6.png" className="max-w-[300px] m-3 mt-[9vw] md:mt-[10vw] lg:mt-[15vw] xl:mt-[6vw]"></img>
            <span className="text-xl md:text-2xl mb-[15vw] md:mb-30 lg:mb-[10vw] xl:mb-[10vw] px-[70px] text-center ">
                自我們成立以來，已經服務了超過
                <VisibilitySensor onChange={onVisibilityChange}>
                    {({ isVisible }: { isVisible: boolean }) => (
                        <span className="text-red-600 font-bold">
                            {counting ? <CountUp start={0} end={5298726} duration={1000} separator="," /> : '0'}
                        </span>
                    )}
                </VisibilitySensor>
                人。
            </span>
            <div className="flex flex-col text-sm md:text-lg text-white text-center items-center">
                {isMobile
                    ? (
                        <span className="font-medium">
                            理財周刊即是你最佳的投資理財夥伴<br />
                            致力於提供高品質的理財知識和投資報告，<br />
                            希望能夠幫助更多的人實現財務自由和幸福生活。
                        </span>
                    ) : (
                        <span>
                            理財周刊即是你最佳的投資理財夥伴<br />
                            致力於提供高品質的理財知識和投資報告，希望能夠幫助更多的人實現財務自由和幸福生活。
                        </span>
                    )
                }
                <img src="/image/banner-overlay-img-about-word.png" className="max-w-[330px] mt-5 mb-5"></img>
                {isMobile
                    ? (
                        <span className="font-medium">
                            學會正確地投資和管理財務，<br />
                            從而穩健地營造自己的生活。<br />
                            <br />
                            我們鼓勵您訂閱我們的雜誌，<br />
                            以獲得最新的理財資訊、專家觀點和投資建議。<br />
                            這將是您獲取有關投資、財務管理<br />
                            和理財幸福的寶貴資源。<br /><br />
                            謝謝您的支持，我們期待與您一起建立一個<br />
                            理財、理善、理健康的全民理財幸福島！
                        </span>
                    ) : (
                        <span>
                            學會正確地投資和管理財務，從而穩健地營造自己的生活。<br />
                            我們鼓勵您訂閱我們的雜誌，以獲得最新的理財資訊、專家觀點和投資建議。<br />
                            這將是您獲取有關投資、財務管理和理財幸福的寶貴資源。<br />
                            謝謝您的支持，我們期待與您一起建立一個理財、理善、理健康的全民理財幸福島！
                        </span>
                    )
                }
                <div className="cursor-pointer max-w-[150px] mt-5 md:max-w-[220px]">
                    <a href="https://pse.is/56zyed" target="_blank">
                        <img src="/image/button.png" className="hover:-translate-y-3 duration-500 ease-out"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SeventhComponent;