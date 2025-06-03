
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Star, Quote, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedElements, setAnimatedElements] = useState(false);

  useEffect(() => {
    setAnimatedElements(true);
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "James Mwangi",
      role: "Fashion Boutique Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
      content: "Since partnering with Frenies Studio, our social media presence has grown tremendously. Their Novus service has maintained our brand voice perfectly, and our engagement has increased by 150%. Takura truly understands digital marketing!",
      metric: "150% engagement increase",
      gradient: "from-purple-600 to-pink-600",
      fallback: "JM"
    },
    {
      name: "Chioma Nduka",
      role: "E-commerce Store Owner",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&auto=format&fit=crop&q=80",
      content: "The Growth Labs program has been a game-changer for my business. We signed up with just $100 and within two months, Frenies brought us 15 new clients. The ROI has been incredible, and I appreciate their performance-based model!",
      metric: "15 new clients in 2 months",
      gradient: "from-pink-600 to-blue-600",
      fallback: "CN"
    }
  ];

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-br from-black via-purple-900 to-gray-900 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-300">
          <Star className="w-6 h-6 text-yellow-400/60 animate-pulse" />
        </div>
        <div className="absolute top-48 right-1/3 animate-bounce delay-700">
          <Sparkles className="w-5 h-5 text-purple-400/60 animate-pulse" />
        </div>
        <div className="absolute bottom-48 left-1/3 animate-bounce delay-1000">
          <TrendingUp className="w-7 h-7 text-pink-400/60 animate-pulse" />
        </div>
      </div>
      
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-screen-md text-center mb-16">
          <div className={`transform transition-all duration-1000 ${animatedElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="mb-8 text-6xl md:text-7xl tracking-tight font-black text-white leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-text-glow">
                Success Stories
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real results from real clients who've <span className="text-purple-400 font-bold">transformed their business</span> with Frenies Studio
            </p>
          </div>
        </div>
        
        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-1000 ${
                  animatedElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${index === 1 ? 'delay-300' : ''}`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500 animate-glow`}></div>
                
                {/* Testimonial Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="w-12 h-12 text-purple-400/30 transform rotate-12 animate-pulse" />
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <Avatar className="h-16 w-16 border-4 border-purple-200/30 mr-6 transform transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback className="bg-purple-100 text-purple-700 text-lg font-bold">
                          {testimonial.fallback}
                        </AvatarFallback>
                      </Avatar>
                      {/* Floating sparkles */}
                      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-lg">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 text-yellow-400 fill-current animate-pulse`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="relative">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Metric Badge */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${testimonial.gradient} rounded-full text-white font-semibold text-sm transform transition-all duration-300 group-hover:scale-105`}>
                      <Check className="h-5 w-5 mr-2 animate-pulse" />
                      {testimonial.metric}
                    </div>
                    <TrendingUp className="w-6 h-6 text-green-400 animate-bounce" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${
          animatedElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {[
            { number: "250+", label: "Brands Transformed", icon: TrendingUp },
            { number: "500%", label: "Average Growth", icon: Star },
            { number: "98%", label: "Client Satisfaction", icon: Check }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group text-center">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse group-hover:animate-bounce" />
                  <div className="text-4xl font-black text-white mb-2 animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${
          animatedElements ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to be our next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">success story</span>?
            </h3>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 text-lg rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 animate-glow"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                Start Your Transformation
                <Star className="ml-3 h-6 w-6 transform transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
