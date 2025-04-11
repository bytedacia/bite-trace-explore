
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/loc8abite/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61555889236241",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/loc8abite",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/loc8abite",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Loc8ABite",
    icon: <Youtube className="w-5 h-5" />,
  },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
