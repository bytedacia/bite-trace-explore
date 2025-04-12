
import React, { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import AudioPlayer from "./AudioPlayer";
import EmailSignupForm from "./EmailSignupForm";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Instagram, MessageCircle } from "lucide-react";
import CreatorSocialLinks from "./CreatorSocialLinks";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <VideoBackground videoId="dIvAk_VlM3s" />
      
      {/* Audio Player */}
      <AudioPlayer videoId="4UaEPz6FeqU" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div 
          className={`container mx-auto max-w-4xl text-center transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Logo />
          </div>
          
          {/* Coming Soon Text */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse-slow text-white">
              In Arrivo 2025/2026
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Un'esperienza unica che combina la passione per il cibo e l'avventura della scoperta
            </p>
          </div>
          
          {/* Email Signup */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-medium mb-4 text-white">
              Iscriviti per essere il primo a sapere quando saremo pronti
            </h3>
            <EmailSignupForm />
          </div>
          
          {/* Social Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-medium mb-4 text-white">
              Seguici sui social
            </h3>
            <SocialLinks className="mb-12" />
          </div>
          
          {/* Scroll Down Button for Feature Highlights */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="glass-morphism border-white/20 text-white hover:bg-white/20 group transition-all duration-300"
            >
              Scopri di più <ArrowDown className="ml-2 w-4 h-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div 
        id="features" 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
            Cosa offre Loc8ABite?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="glass-morphism p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-3 text-white">L'Arte dell'Esplorazione</h3>
              <p className="text-white/80">
                Immergiti in un viaggio virtuale attraverso immagini HD e Street View di ristoranti sorprendenti sparsi per il mondo
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-morphism p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-3 text-white">La Sfida della Precisione</h3>
              <p className="text-white/80">
                Metti alla prova il tuo intuito gastronomico posizionando il marker sulla mappa per indovinare l'esatta location
              </p>
            </div>
            
            {/* Feature 3 - Updated from Quiz to Multiplayer */}
            <div className="glass-morphism p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-3 text-white">Multiplayer Globale</h3>
              <p className="text-white/80">
                Sfida giocatori da tutto il mondo in match in tempo reale e scala le classifiche internazionali con le tue abilità culinarie
              </p>
            </div>
            
            {/* Feature 4 - Updated to Custom Maps */}
            <div className="glass-morphism p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-3 text-white">Mappe Personalizzate</h3>
              <p className="text-white/80">
                Crea i tuoi percorsi gastronomici unici, condividili con la community e scopri le creazioni più apprezzate dagli altri giocatori
              </p>
            </div>
          </div>
          
          {/* Creator Section */}
          <div className="glass-morphism p-6 rounded-xl text-left mb-12">
            <h3 className="text-xl font-semibold mb-3 text-white text-center">Segui il Creatore</h3>
            <p className="text-white/80 text-center mb-4">
              Scopri di più sul genio creativo dietro Loc8ABite e segui i suoi aggiornamenti personali
            </p>
            <CreatorSocialLinks />
          </div>
          
          {/* Back to Top Button */}
          <div className="animate-fade-in">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="glass-morphism border-white/20 text-white hover:bg-white/20 group transition-all duration-300"
            >
              Torna all'inizio <ArrowUp className="ml-2 w-4 h-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
