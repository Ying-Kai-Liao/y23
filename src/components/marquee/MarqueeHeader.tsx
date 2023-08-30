import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeHeader = () => {
    return (
        <Marquee
            speed={100}
            pauseOnHover
            className="py-1 font-medium text-sm 
        bg-gradient-to-r 
        from-white/30 from-5% via-white via-50% to-white/30 to-95%"
        >
            <span className="mr-10">(一) 9/16 技術派三大名師公益講座 朱家泓x蕭明道x謝佳穎 首度合體</span>
            <span className="mr-10">(二)2.23週年慶全新上線，打造財務藍圖，譜出家的幸福島，歡迎登島</span>
            <span className="mr-10">(三)全新線上服務內容，理周3⼒選股淘⾦術 幫你一手掌握投資脈動</span>
        </Marquee>

    )
}

export default MarqueeHeader