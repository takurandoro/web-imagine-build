
import { TrendingUp, Users, Target, Zap, Sparkles, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => {
        if (prev.length < 3) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Growth Labs",
      description: "Performance-based social media management. We only succeed when you do. Starting at just $100, we'll bring you paying clients or you don't pay us.",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      accentColor: "purple-400",
      stats: "300% avg growth",
      delay: "delay-0"
    },
    {
      icon: Users,
      title: "Novus",
      description: "Premium content creation and account management for established brands. Let us maintain your digital presence while you focus on your business.",
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      accentColor: "pink-400",
      stats: "500+ brands served",
      delay: "delay-200"
    },
    {
      icon: Target,
      title: "Guru Consults",
      description: "Strategic consulting sessions with Takura Ndoro himself. Get personalized advice on scaling your social media presence and digital marketing strategy.",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      accentColor: "blue-400",
      stats: "1-on-1 expertise",
      delay: "delay-400"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-300">
          <Sparkles className="w-6 h-6 text-purple-400/40" />
        </div>
        <div className="absolute top-48 right-1/3 animate-bounce delay-700">
          <Zap className="w-5 h-5 text-pink-400/40" />
        </div>
        <div className="absolute bottom-48 left-1/3 animate-bounce delay-1000">
          <Star className="w-7 h-7 text-blue-400/40" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-text-glow">
                Our Services
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose your path to <span className="text-purple-400 font-bold">social media domination</span>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${feature.delay}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 animate-glow`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full transform transition-all duration-500 ${
                  isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
                } hover:border-white/30`}>
                  
                  {/* Floating Icon */}
                  <div className={`relative mb-8 transform transition-all duration-500 ${
                    isHovered ? 'scale-110 -rotate-12' : 'scale-100 rotate-0'
                  }`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center animate-float`}>
                      <Icon className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    {/* Sparkles around icon */}
                    {isHovered && (
                      <>
                        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-bounce" />
                        <Sparkles className="absolute -bottom-2 -left-2 w-3 h-3 text-purple-400 animate-bounce delay-200" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className={`text-3xl font-bold text-white group-hover:text-${feature.accentColor} transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <div className={`w-20 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform transition-all duration-500 ${
                      isHovered ? 'w-32' : 'w-20'
                    }`}></div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Stats Badge */}
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full text-white font-semibold text-sm transform transition-all duration-300 ${
                      isHovered ? 'scale-105 animate-pulse' : 'scale-100'
                    }`}>
                      <Star className="w-4 h-4 mr-2 animate-spin" />
                      {feature.stats}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute bottom-8 right-8 transform transition-all duration-300 ${
                    isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}>
                    <ArrowRight className={`w-6 h-6 text-${feature.accentColor} animate-bounce`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">Transform</span> Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join 250+ brands that have revolutionized their social media presence with Frenies Studio
            </p>
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 text-lg rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 animate-glow"
              onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                Book Your Strategy Call Now
                <ArrowRight className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
