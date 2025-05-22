
import { Button } from "@/components/ui/button";
import { CalendarClock, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-900 to-black pt-28 pb-20 overflow-hidden">
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
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
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
          
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 relative z-20">
            <div className="py-8 px-6 text-white rounded-lg mb-4 backdrop-blur-sm border border-white/10 bg-gradient-to-r from-purple-900/40 to-black/40 shadow-lg">
              <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                GROW & SELL ON SOCIAL MEDIA
              </h2>
              <h3 className="text-xl font-semibold mb-6 text-purple-200">
                AS A BUSY BUSINESS OWNER
              </h3>
              <p className="text-lg text-gray-200">
                Done for you monthly social media marketing services.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
