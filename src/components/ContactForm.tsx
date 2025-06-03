
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, MessageCircle, Sparkles, Zap, Star } from "lucide-react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_default',
        'template_default',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_name: 'Frenies Studio'
        },
        'user_default'
      );

      if (result.text === 'OK') {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-300">
          <Star className="w-6 h-6 text-yellow-400/40 animate-pulse" />
        </div>
        <div className="absolute top-48 right-1/3 animate-bounce delay-700">
          <Sparkles className="w-5 h-5 text-purple-400/40 animate-pulse" />
        </div>
        <div className="absolute bottom-48 left-1/3 animate-bounce delay-1000">
          <Zap className="w-7 h-7 text-pink-400/40 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-text-glow">
                Let's Create Magic
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your social media presence? Let's discuss how we can make your brand <span className="text-purple-400 font-bold">unforgettable</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-purple-400 font-semibold">Email</p>
                      <p className="text-white">hello@freniesstudio.com</p>
                    </div>
                  </div>

                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-pink-400 font-semibold">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold">Location</p>
                      <p className="text-white">Global • Remote First</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <button 
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageCircle className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                      Book Strategy Call
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in delay-300">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                <form onSubmit={handleSubmit} className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Sparkles className="mr-3 animate-pulse" />
                    Send us a Message
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl h-12 group-hover:border-purple-400 transition-all duration-300 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                    <div className="group">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl h-12 group-hover:border-purple-400 transition-all duration-300 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl h-12 group-hover:border-purple-400 transition-all duration-300 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                    <div className="group">
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl h-12 group-hover:border-purple-400 transition-all duration-300 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project and goals..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-xl group-hover:border-purple-400 transition-all duration-300 focus:border-purple-400 focus:ring-purple-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                          Send Message
                          <Sparkles className="ml-3 h-5 w-5 group-hover:animate-pulse" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
