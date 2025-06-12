import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
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
    <section ref={sectionRef} id="testimonials" className="bg-gradient-to-br from-purple-50 to-white py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="testimonial-bg-elements">
          <div className="bg-element bg-element-1"></div>
          <div className="bg-element bg-element-2"></div>
          <div className="bg-element bg-element-3"></div>
        </div>
      </div>
      
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className={`mx-auto max-w-screen-md text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 relative">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Success Stories
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          </h2>
          <p className="mb-5 font-light text-gray-600 text-lg md:text-xl leading-relaxed">
            Here's what our clients say about our social media management services.
          </p>
        </div>
        
        <div className="grid mb-12 lg:mb-16 lg:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className={`testimonial-card group transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{animationDelay: '0.2s'}}>
            <div className="glass-card-testimonial p-8 rounded-2xl border border-purple-200 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20">
                <Quote className="h-6 w-6 text-white" />
              </div>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 border-3 border-purple-300 mr-4 ring-4 ring-purple-100 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src="/grace.jpg" />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold">GN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Grace Nalule</h3>
                    <p className="text-purple-600 font-medium">Social Media Manager - One Child Africa</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-twinkle" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="relative mb-6">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Since partnering with Frenies Studio, our social media presence has grown tremendously. Their <span className="font-semibold text-purple-600">Novus service</span> has maintained our brand voice perfectly, and our engagement has increased by <span className="font-semibold text-purple-600 animate-pulse">150%</span>. Takura truly understands digital marketing!"
                </p>
              </div>
              
              {/* Achievement Badge */}
              <div className="flex items-center p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-200">
                <Check className="h-5 w-5 mr-3 text-green-600" />
                <span className="text-green-800 font-medium">Increased social media engagement by 150%</span>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className={`testimonial-card group transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{animationDelay: '0.4s'}}>
            <div className="glass-card-testimonial p-8 rounded-2xl border border-purple-200 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20">
                <Quote className="h-6 w-6 text-white" />
              </div>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 border-3 border-purple-300 mr-4 ring-4 ring-purple-100 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src="/mercy.jpg" />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold">MV</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mercy Vugutsa</h3>
                    <p className="text-purple-600 font-medium">Owns Hook and Stitch E-commerce store</p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-twinkle" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="relative mb-6">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "The <span className="font-semibold text-purple-600">Growth Labs program</span> has been a game-changer for my business. We signed up with just $150 and within two months, Frenies brought us <span className="font-semibold text-purple-600 animate-pulse">15 new clients</span>. The ROI has been incredible, and I appreciate their performance-based model!"
                </p>
              </div>
              
              {/* Achievement Badge */}
              <div className="flex items-center p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-200">
                <Check className="h-5 w-5 mr-3 text-green-600" />
                <span className="text-green-800 font-medium">Acquired 15 new clients in just two months</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.6s'}}>
          <p className="mb-8 text-xl text-gray-700 font-light">Ready to achieve results like these for your business?</p>
          <a 
            href="#contact" 
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2 -mr-1 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
