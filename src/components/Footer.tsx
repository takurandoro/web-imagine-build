
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Sparkles, Star, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-purple-900 to-gray-900 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 animate-bounce delay-300">
          <Star className="w-4 h-4 text-yellow-400/30 animate-pulse" />
        </div>
        <div className="absolute top-32 right-1/3 animate-bounce delay-700">
          <Sparkles className="w-3 h-3 text-purple-400/30 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-bounce delay-1000">
          <Zap className="w-5 h-5 text-pink-400/30 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                <Sparkles className="w-6 h-6 text-white animate-bounce" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Frenies Studio</h3>
                <p className="text-purple-400">Social Media Mastery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              We don't just manage social media — we dominate it. Transform your brand's digital presence with viral content and strategic growth.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "text-blue-500", link: "#" },
                { icon: Instagram, color: "text-pink-500", link: "#" },
                { icon: Twitter, color: "text-cyan-400", link: "#" },
                { icon: Linkedin, color: "text-blue-600", link: "#" },
                { icon: Youtube, color: "text-red-500", link: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className={`group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  >
                    <Icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in delay-200">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Star className="mr-2 animate-pulse" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Services", href: "#services" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
                { name: "Book Strategy Call", href: "https://calendar.app.google/akSVg2rC9YGMkj468" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center"
                    onClick={link.href.startsWith('http') ? () => window.open(link.href, '_blank') : undefined}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in delay-400">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Zap className="mr-2 animate-pulse" />
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-purple-400 text-sm font-semibold">Email</p>
                  <p className="text-white">hello@freniesstudio.com</p>
                </div>
              </div>

              <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-pink-400 text-sm font-semibold">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-400 text-sm font-semibold">Location</p>
                  <p className="text-white">Global • Remote First</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © {currentYear} Frenies Studio. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-white text-lg mb-4">
              Ready to dominate social media? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Let's make it happen.</span>
            </p>
            <button
              onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Book Free Consultation
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
