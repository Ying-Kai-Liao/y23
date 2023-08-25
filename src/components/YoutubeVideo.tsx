import React from 'react';

interface YouTubeVideoProps {
    width?: number,
    height?: number,
    src: string,
    title?: string,
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
    width = 560,
    height = 315,
    src,
    title = 'YouTube video player',
  }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;