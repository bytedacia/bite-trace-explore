
import React, { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  videoId: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoId }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadYouTubeIframeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.playVideo();
            },
          },
        });
      };
    };

    loadYouTubeIframeAPI();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-2]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
      <iframe
        ref={iframeRef}
        id="youtube-player"
        className="video-background"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
