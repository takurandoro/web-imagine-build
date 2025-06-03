
import { Button } from "@/components/ui/button";
import { CalendarClock, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Sparkles, Zap, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animatedIcons, setAnimatedIcons] = useState(false);
  const [floatingElements, setFloatingElements] = useState(false);

  useEffect(() => {
    setAnimatedIcons(true);
    setTimeout(() => setFloatingElements(true), 500);
  }, []);

  const handleServicesClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookCallClick = () => {
    window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {floatingElements && (
          <>
            <div className="absolute top-32 left-1/4 animate-bounce delay-300">
              <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
            </div>
            <div className="absolute top-48 right-1/3 animate-bounce delay-700">
              <Zap className="w-5 h-5 text-pink-400 opacity-60" />
            </div>
            <div className="absolute bottom-48 left-1/3 animate-bounce delay-1000">
              <TrendingUp className="w-7 h-7 text-blue-400 opacity-60" />
            </div>
          </>
        )}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading with Staggered Animation */}
          <div className="space-y-6 mb-12">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white mb-6">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Elevate Your
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transform hover:scale-105 transition-transform duration-300 delay-100 animate-pulse">
                  Social Media
                </span>
                <span className="block transform hover:scale-105 transition-transform duration-300 delay-200">
                  Empire
                </span>
              </h1>
            </div>
            
            <div className="animate-slide-in delay-300">
              <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <span className="text-purple-400 font-semibold">Frenies Studio</span> is where viral content meets strategic growth. 
                Founded by <span className="text-pink-400 font-semibold">Takura Ndoro (GuruNdoro)</span>, 
                we don't just manage social media — we dominate it.
              </p>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-scale-in delay-500">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
              <div className="text-white/80">Engagement Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 delay-100">
              <div className="text-3xl font-bold text-pink-400 mb-2">10M+</div>
              <div className="text-white/80">Reach Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 delay-200">
              <div className="text-3xl font-bold text-blue-400 mb-2">250+</div>
              <div className="text-white/80">Brands Transformed</div>
            </div>
          </div>

          {/* CTA Buttons with Advanced Animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 text-lg rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              onClick={handleServicesClick}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                Discover Our Magic 
                <ArrowRight className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-white/10 border-2 border-white/30 backdrop-blur-md text-white hover:bg-white/20 font-bold py-6 px-12 text-lg rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/30"
              onClick={handleBookCallClick}
            >
              <CalendarClock className="mr-3 h-6 w-6 group-hover:animate-spin" />
              Book Your Free Strategy Call
            </Button>
          </div>

          {/* Social Media Icons with Enhanced Animation */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <div className="text-white/60 text-sm font-medium mb-4 text-center">
              We Dominate Every Platform
            </div>
            <div className="flex justify-center">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(3)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex">
                    <div className="group mx-8 transform transition-all duration-300 hover:scale-125 hover:-translate-y-2">
                      <Facebook size={40} className="text-blue-500 group-hover:animate-pulse" />
                    </div>
                    <div className="group mx-8 transform transition-all duration-300 hover:scale-125 hover:-translate-y-2">
                      <Instagram size={40} className="text-pink-500 group-hover:animate-pulse" />
                    </div>
                    <div className="group mx-8 transform transition-all duration-300 hover:scale-125 hover:-translate-y-2">
                      <Twitter size={40} className="text-cyan-400 group-hover:animate-pulse" />
                    </div>
                    <div className="group mx-8 transform transition-all duration-300 hover:scale-125 hover:-translate-y-2">
                      <Linkedin size={40} className="text-blue-600 group-hover:animate-pulse" />
                    </div>
                    <div className="group mx-8 transform transition-all duration-300 hover:scale-125 hover:-translate-y-2">
                      <Youtube size={40} className="text-red-500 group-hover:animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full block transform transition-all duration-1000 hover:scale-105"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="50%" stopColor="#f3f4f6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
