import React from 'react';

interface YouTubeVideoProps {
    width?: number,
    height?: number,
    src: string,
    title?: string,
    ratio?: number
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
    width = 560,
    height = 315,
    src,
    title = 'YouTube video player',
    ratio = 1,
  }) => {
  return (
    <div 
      className={`flex justify-center items-center`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${ratio})`,
        transformOrigin: 'center center'
      }}
    >
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