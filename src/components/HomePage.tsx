
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import VideoBackground from "./VideoBackground";
import AudioPlayer from "./AudioPlayer";
import EmailSignupForm from "./EmailSignupForm";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import CreatorSocialLinks from "./CreatorSocialLinks";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleScopriClick = () => {
    // Button action without scrolling - could be used for showing more content in the future
    console.log("Scopri di più clicked");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground videoId="dIvAk_VlM3s" />
      
      {/* Audio Player */}
      <AudioPlayer videoId="4UaEPz6FeqU" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-8 overflow-hidden">
        <div 
          className={`container mx-auto max-w-6xl text-center transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Logo />
          </div>
          
          {/* Coming Soon Text */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 animate-pulse-slow text-white">
              In Arrivo 2025/2026
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-2">
              Un'esperienza unica che combina la passione per il cibo e l'avventura della scoperta
            </p>
          </div>
          
          {/* Scopri di più Button */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              onClick={handleScopriClick}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              Scopri di più <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          {/* Features and Email in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Features Section */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gradient">
                Cosa offre Loc8ABite?
              </h2>
              
              <div className="grid grid-cols-1 gap-3 mb-4">
                {/* Feature 1 */}
                <div className="glass-morphism p-3 rounded-xl text-left">
                  <h3 className="text-sm sm:text-base font-semibold mb-1 text-white">L'Arte dell'Esplorazione</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Immergiti in un viaggio virtuale attraverso immagini HD di ristoranti sparsi per il mondo
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="glass-morphism p-3 rounded-xl text-left">
                  <h3 className="text-sm sm:text-base font-semibold mb-1 text-white">La Sfida della Precisione</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Metti alla prova il tuo intuito gastronomico posizionando il marker sulla mappa
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="glass-morphism p-3 rounded-xl text-left">
                  <h3 className="text-sm sm:text-base font-semibold mb-1 text-white">Multiplayer Globale</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Sfida giocatori da tutto il mondo in match in tempo reale
                  </p>
                </div>
              </div>
            </div>
            
            {/* Email Signup and Social */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3 text-white">
                  Iscriviti per essere il primo a sapere
                </h3>
                <EmailSignupForm />
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-white">
                  Seguici sui social
                </h3>
                <SocialLinks className="mb-6" />
              </div>
              
              {/* Creator Section */}
              <div className="glass-morphism p-3 rounded-xl text-left">
                <h3 className="text-sm sm:text-base font-semibold mb-1 text-white text-center">Segui il Creatore</h3>
                <CreatorSocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
