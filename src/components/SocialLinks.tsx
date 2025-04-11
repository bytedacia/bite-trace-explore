
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, TiktokIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom TikTok icon since it's not available in Lucide React
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

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
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bytes_ia?_t=ZN-8vRKba3HAlb&_r=1",
    icon: <TikTok />,
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
