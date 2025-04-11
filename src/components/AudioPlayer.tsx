
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  videoId: string;
}

// Define the YouTube Player API interface
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ videoId }) => {
  const audioRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const loadYouTubeIframeAPI = () => {
      // Check if the YouTube API is already loaded
      if (window.YT) return;
      
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeIframeAPI();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // Try to access the iframe's contentWindow to call the YouTube API methods
    try {
      const iframe = audioRef.current;
      if (iframe && iframe.contentWindow) {
        if (isMuted) {
          iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
        }
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <iframe
        ref={audioRef}
        className="hidden"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&loop=1&playlist=${videoId}`}
        allow="autoplay"
        frameBorder="0"
      ></iframe>
      
      <Button 
        onClick={toggleMute} 
        size="icon" 
        variant="outline" 
        className="w-10 h-10 rounded-full glass-morphism hover:bg-white/20 transition-all duration-300"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
