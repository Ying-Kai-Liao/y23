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
            理財周刊推出官網訂閱制度，還不趕快訂閱起來！！！
        </Marquee>
    )
}

export default MarqueeHeader