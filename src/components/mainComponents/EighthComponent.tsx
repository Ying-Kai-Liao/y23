import React from "react";
import SocialLinks from "../footer/SocialLinks";

const EighthComponent = () => {
    return (
        <div className="bg-local h-[20.4vw] flex flex-col items-center justify-center text-white text-medium" style={{backgroundImage: "url(/image/8.jpg)"}}>
            <div className="mb-12">
                視覺設計｜黃琬蓉
                財經編輯｜張仲華
                行銷企劃｜高珮芸
            </div>
            <SocialLinks />
        </div>
    )
}

export default EighthComponent;