
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      toast.error("Per favore, inserisci un indirizzo email valido.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Grazie! Ti avviseremo quando Loc8ABite sarà pronto.");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Il tuo indirizzo email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass-morphism border-white/20 text-white placeholder:text-white/70 h-12"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-white text-black hover:bg-white/90 h-12 px-6 transition-all duration-300"
        >
          {isSubmitting ? "Invio..." : "Notificami"}
        </Button>
      </div>
    </form>
  );
};

export default EmailSignupForm;
