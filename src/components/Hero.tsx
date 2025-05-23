
import { Button } from "@/components/ui/button";
import { CalendarClock, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animatedIcons, setAnimatedIcons] = useState(false);

  useEffect(() => {
    // Start the animation after component mounts
    setAnimatedIcons(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-purple-900 to-black pt-28 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="animate-fade-in">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Social Media</span> Presence
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
            Frenies Studio is a full-service social media management agency founded by Takura Ndoro (GuruNdoro), a marketing graduate with extensive e-commerce experience.
          </p>
          <div className="flex flex-col mb-16 lg:mb-20 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="inline-flex justify-center items-center bg-purple-600 hover:bg-purple-700 transform transition hover:scale-105" asChild>
              <a href="#services" className="group">
                Our Services 
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 inline-flex justify-center items-center gap-2 transform transition hover:scale-105" asChild>
              <a href="https://calendar.app.google/akSVg2rC9YGMkj468" target="_blank" rel="noopener noreferrer">
                <CalendarClock className="h-5 w-5" />
                Book Your Free Call
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            
            <div className="absolute bottom-12 w-full overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <Facebook size={32} className="text-purple-600 inline-block mx-4" />
                <Instagram size={32} className="text-purple-600 inline-block mx-4" />
                <Twitter size={32} className="text-purple-600 inline-block mx-4" />
                <Linkedin size={32} className="text-purple-600 inline-block mx-4" />
                <Youtube size={32} className="text-purple-600 inline-block mx-4" />
                <Facebook size={32} className="text-purple-600 inline-block mx-4" />
                <Instagram size={32} className="text-purple-600 inline-block mx-4" />
                <Twitter size={32} className="text-purple-600 inline-block mx-4" />
                <Linkedin size={32} className="text-purple-600 inline-block mx-4" />
                <Youtube size={32} className="text-purple-600 inline-block mx-4" />
                <Facebook size={32} className="text-purple-600 inline-block mx-4" />
                <Instagram size={32} className="text-purple-600 inline-block mx-4" />
                <Twitter size={32} className="text-purple-600 inline-block mx-4" />
                <Linkedin size={32} className="text-purple-600 inline-block mx-4" />
                <Youtube size={32} className="text-purple-600 inline-block mx-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
