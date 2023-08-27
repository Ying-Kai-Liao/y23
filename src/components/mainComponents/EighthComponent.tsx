import React from "react";
import SocialLinks from "../footer/SocialLinks";
import useWindowSize from '../../hook/useWindowSize'

const EighthComponent = () => {

    const size = useWindowSize()
    const isMobile = size.width <= 768;

    return (
        <div id="08"
        className={`bg-local ${isMobile ? "h-[58.8vw]" : "h-[20.4vw]"} flex flex-col items-center justify-center text-white text-sm`}
        style={
            isMobile
                ? { backgroundImage: "url(/image/mobile8.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                : { backgroundImage: "url(/image/8.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
        }
        >
            <div className="mb-8 md:mb-12">
                {isMobile
                    ? (
                        <span className=" ">
                            視覺設計｜黃琬蓉<br />
                            財經編輯｜張仲華<br />
                            行銷企劃｜高珮芸<br />
                        </span>
                    ) : (
                        <span>
                            視覺設計｜黃琬蓉
                            財經編輯｜張仲華
                            行銷企劃｜高珮芸
                        </span>
                    )
                }
            </div>
            <SocialLinks />
        </div>
    )
}

export default EighthComponent;