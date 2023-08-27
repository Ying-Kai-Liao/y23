import React from "react";
import YouTubeVideo from "../YoutubeVideo";
import useWindowSize from '../../hook/useWindowSize'

const FifthComponent = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 768;

    const width = isMobile ? 640 : 640;
    const height = isMobile ? 360 : 360;

    return (
        <div id="05"
            className={`bg-local ${isMobile ? "h-[243.7vw]" : "h-[147.2vw]"} flex flex-col items-center justify-center`}
            style={
                isMobile 
                ? { backgroundImage: "url(/image/mobile5.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
                : { backgroundImage: "url(/image/5.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
            }
        >
            <img src="/image/lil_banner4.jpg" className="max-w-[250px] md:max-w-[300px] m-6 pt-10"></img>
            <span className=" text-white font-bold mb-[10vw] md:mb-[0vw] md:text-2xl md:pb-20" >投資理財不簡單，我們來幫你</span>
            <div className="flex flex-col max-w-[670px] items-center justify-center max-h-[600px] md:max-h-[1275px] -space-y-40 md:space-y-28">
                <YouTubeVideo
                    width={width}
                    height={height}
                    src="https://www.youtube.com/embed/cdsRQc17iyA?si=211PZCLnnFaSbW8L?vq=hd1080"
                    title="My YouTube Video"
                    ratio={isMobile ? 0.45 : 1}
                />
                <YouTubeVideo
                    width={width}
                    height={height}
                    src="https://www.youtube.com/embed/Y71MoYvPm8A?si=teWRqyi_6liYzmqb?vq=hd1080"
                    title="My YouTube Video"
                    ratio={isMobile ? 0.45 : 1}
                />
                <YouTubeVideo
                    width={width}
                    height={height}
                    src="https://www.youtube.com/embed/27b5dYCdad0?si=4P-muWUh8jCsb72L?vq=hd1080"
                    title="My YouTube Video"
                    ratio={isMobile ? 0.45 : 1}
                />
            </div>
        </div>
    )
}

export default FifthComponent;