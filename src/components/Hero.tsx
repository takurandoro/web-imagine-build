
import { Button } from "@/components/ui/button";
import { CalendarClock, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animatedIcons, setAnimatedIcons] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setAnimatedIcons(true);
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleServicesClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookCallClick = () => {
    window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black pt-20 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-animated opacity-90"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className={`particle particle-${i % 5 + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-8">
          {/* Hero Text with Staggered Animation */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
              <span className="block animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Elevate Your
              </span>
              <span className="block animate-slide-up opacity-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                Social Media
              </span>
              <span className="block animate-slide-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                Presence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              Frenies Studio is a full-service social media management agency founded by 
              <span className="text-purple-400 font-semibold"> Takura Ndoro (GuruNdoro)</span>, 
              a marketing graduate with extensive e-commerce experience.
            </p>
          </div>

          {/* Animated Stats Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white counter" data-target="150">150%</div>
              <div className="text-gray-400">Average Growth</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white counter" data-target="50">50+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white counter" data-target="24">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl px-8 py-4 text-lg"
              onClick={handleServicesClick}
            >
              <span className="relative z-10 flex items-center">
                Our Services 
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              className="group glass-button border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl px-8 py-4 text-lg"
              onClick={handleBookCallClick}
            >
              <CalendarClock className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Book Your Free Call
            </Button>
          </div>
        </div>
      </div>
        
      {/* Enhanced Wave and Social Icons */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <div className="relative w-full">
          {/* Animated Wave */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full block wave-animation">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#f3e8ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient)" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          
          {/* Enhanced Social Media Icons Marquee */}
          <div className="absolute bottom-8 left-0 right-0 w-full overflow-hidden">
            <div className="social-marquee">
              <div className="social-icons-track">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="social-icons-set">
                    <Facebook size={40} className="social-icon text-purple-600" />
                    <Instagram size={40} className="social-icon text-purple-600" />
                    <Twitter size={40} className="social-icon text-purple-600" />
                    <Linkedin size={40} className="social-icon text-purple-600" />
                    <Youtube size={40} className="social-icon text-purple-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
