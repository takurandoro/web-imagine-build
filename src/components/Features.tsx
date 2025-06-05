import { Check, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-gray-50 pt-0 pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-12 lg:mb-16">
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:via-indigo-600 after:to-blue-500">
            Our Services
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Unlock the growth dozens of businesses already enjoy with Frenies Studio. Partner directly with Takura Ndoro (GuruNdoro)—a marketing student with proven e-commerce results—who's laser-focused on getting your business more clients and sales online, faster than you imagined.
          </p>
        </div>

        {/* Enhanced Free Call Lead Magnet */}
        <div className="mb-16 glass-card-premium p-8 rounded-2xl border border-purple-200 shadow-2xl hover:scale-[1.02]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 rounded-full">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Book Your Free Strategy Call</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Not sure which service is right for your business? Schedule a free consultation call with Takura to discuss your goals and get expert advice on your social media strategy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg">
                  <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Personalized strategy assessment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg">
                  <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium">Expert marketing advice</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg">
                  <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium">No obligation, free</span>
                </div>
              </div>
            </div>
            
            <div className="flex-none">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white transform transition-all duration-300 hover:scale-110 hover:shadow-2xl px-8 py-4 text-lg"
                onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
              >
                <span className="flex items-center gap-3">
                  Book Your Free Call
                  <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Novus Card */}
          <div className="service-card group">
            <Card className="h-full border-none shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden relative hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-blue-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <div className="p-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Novus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  Complete social media management service. We manage your Instagram and Facebook, posting your content while ensuring brand consistency. <span className='font-semibold text-red-500'>No UGC, No Ads.</span>
                </p>
                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">$250</span>
                  <span className="text-gray-700">/month</span>
                </div>
                <div className="space-y-3">
                  {['Instagram Management', 'Facebook Management', 'Brand Consistency'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/70 transition-colors">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-white text-blue-700 border border-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-700 transform transition-all duration-300 hover:scale-105"
                  onClick={() => location.href='#contact'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Growth Labs Card - Popular */}
          <div className="service-card group scale-105">
            <Card className="h-full border-none shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden relative hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-blue-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500"></div>
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                  POPULAR
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <div className="p-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Growth Labs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  Our paid ads service where we run advertisements for your company using our own money until you get clients or leads.
                </p>
                
                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    $100 sign-up + 5% per lead / 10% per client
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['Paid Advertisement', 'Lead Generation', 'No Upfront Ad Costs'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/70 transition-colors">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white transform transition-all duration-300 hover:scale-105"
                  onClick={() => location.href='#contact'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Koncept Card */}
          <div className="service-card group">
            <Card className="h-full border-none shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden relative hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-blue-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <div className="p-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Kontent</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  Content creation service where we create engaging content for your brand including stills, reels, stories, and user-generated content (UGC).
                </p>
                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 bg-clip-text text-transparent">$200</span>
                  <span className="text-gray-700">/month</span>
                </div>
                <div className="space-y-3">
                  {['Content Creation', 'Stills & Reels', 'UGC Production'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/70 transition-colors">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-white text-blue-700 border border-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-700 transform transition-all duration-300 hover:scale-105 mt-6"
                  onClick={() => location.href='#contact'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
