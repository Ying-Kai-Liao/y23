import React from "react";
import YouTubeVideo from "../YoutubeVideo";

const FifthComponent = () => {
    return (
        <div className="bg-local h-[147.2vw] flex flex-col items-center justify-center" style={{backgroundImage: "url(/image/5.jpg)"}}>
            <img src="/image/lil_banner4.jpg" className="max-w-[300px] m-6"></img>
            <span className="text-2xl pb-20">投資理財不簡單，我們來幫你</span>
            <div className="flex flex-col max-w-[670px] items-center justify-center max-h-[1275px]">
                <YouTubeVideo
                    width={640}
                    height={360}
                    src="https://www.youtube.com/embed/Y71MoYvPm8A?si=teWRqyi_6liYzmqb"
                    title="My YouTube Video"
                />
                <YouTubeVideo
                    width={640}
                    height={360}
                    src="https://www.youtube.com/embed/Y71MoYvPm8A?si=teWRqyi_6liYzmqb"
                    title="My YouTube Video"
                />
                <YouTubeVideo
                    width={640}
                    height={360}
                    src="https://www.youtube.com/embed/Y71MoYvPm8A?si=teWRqyi_6liYzmqb"
                    title="My YouTube Video"
                />
            </div>
        </div>
    )
}

export default FifthComponent;