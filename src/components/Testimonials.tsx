
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-purple-100/30 to-transparent rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>
      
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-1 after:w-20 after:rounded-full after:bg-purple-600">
            Our Success Stories
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Here's what our clients say about our social media management services.
          </p>
        </div>
        
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="flex items-center mb-4">
                <Avatar className="h-14 w-14 border-2 border-purple-200 mr-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&auto=format&fit=crop" />
                  <AvatarFallback className="bg-purple-100 text-purple-700">JM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">James Mwangi</h3>
                  <p className="text-sm text-gray-500">Fashion Boutique Owner</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="relative mt-6">
              <svg className="absolute top-0 left-0 transform -translate-y-6 -translate-x-2 h-12 w-12 text-purple-200 opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 mt-4 pl-6">
                "Since partnering with Frenies Studio, our social media presence has grown tremendously. Their <span className="font-semibold text-purple-600">Novus service</span> has maintained our brand voice perfectly, and our engagement has increased by <span className="font-semibold text-purple-600">150%</span>. Takura truly understands digital marketing!"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-sm text-gray-500">Increased social media engagement by 150%</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <div className="flex items-center mb-4">
                <Avatar className="h-14 w-14 border-2 border-purple-200 mr-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&auto=format&fit=crop" />
                  <AvatarFallback className="bg-purple-100 text-purple-700">CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Chioma Nduka</h3>
                  <p className="text-sm text-gray-500">E-commerce Store Owner</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="relative mt-6">
              <svg className="absolute top-0 left-0 transform -translate-y-6 -translate-x-2 h-12 w-12 text-purple-200 opacity-60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 mt-4 pl-6">
                "The <span className="font-semibold text-purple-600">Growth Labs program</span> has been a game-changer for my business. We signed up with just $100 and within two months, Frenies brought us <span className="font-semibold text-purple-600">15 new clients</span>. The ROI has been incredible, and I appreciate their performance-based model!"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-sm text-gray-500">Acquired 15 new clients in just two months</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add a call-to-action */}
        <div className="text-center">
          <p className="mb-6 text-lg text-gray-600">Ready to achieve results like these for your business?</p>
          <a href="#contact" className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105">
            Get Started Today
            <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
