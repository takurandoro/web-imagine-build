import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarClock, Mail, Phone, ArrowRight, Check, Send, Sparkles } from "lucide-react";
import { sendEmail } from "@/services/EmailService";

const ContactForm = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "free-call",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber,
        service: formData.service
      });
      
      toast({
        title: "Message sent!",
        description: formData.service === "free-call" 
          ? "Thank you for booking a free strategy call. We'll contact you shortly to schedule a time!"
          : "Thank you for your interest in Frenies Studio. We'll get back to you shortly!",
      });
      
      setFormData({ name: "", email: "", message: "", service: "free-call", phoneNumber: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Inbox Full",
        description: "The inbox is currently full. We advise you to book the call directly on the Frenies calendar.",
        variant: "destructive",
        action: (
          <Button variant="secondary" size="sm" onClick={handleBookFreeCall}>
            Book Directly
          </Button>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookFreeCall = () => {
    window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank");
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-gradient-to-br from-gray-50 to-purple-50 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="contact-bg-elements">
          <div className="contact-orb contact-orb-1"></div>
          <div className="contact-orb contact-orb-2"></div>
          <div className="contact-orb contact-orb-3"></div>
        </div>
      </div>
      
      <div className="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 relative">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-gray-600 text-lg md:text-xl leading-relaxed">
            Ready to elevate your social media presence? Let's discuss how Frenies Studio can help your business grow online.
          </p>
        </div>
        
        {/* Contact Methods */}
        <div className={`flex flex-col md:flex-row gap-4 mb-12 justify-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.2s'}}>
          <a 
            href="mailto:freniestudio@gmail.com" 
            className="group flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-all duration-300 glass-card p-4 px-6 rounded-xl hover:scale-105"
          >
            <Mail className="h-5 w-5 group-hover:animate-bounce" /> 
            <span className="font-medium">freniestudio@gmail.com</span>
          </a>
          <a 
            href="tel:+263772660891" 
            className="group flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-all duration-300 glass-card p-4 px-6 rounded-xl hover:scale-105"
          >
            <Phone className="h-5 w-5 group-hover:animate-bounce" /> 
            <span className="font-medium">+263772660891</span>
          </a>
          <a 
            href="https://calendar.app.google/akSVg2rC9YGMkj468" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-all duration-300 glass-card p-4 px-6 rounded-xl hover:scale-105"
          >
            <CalendarClock className="h-5 w-5 group-hover:animate-bounce" /> 
            <span className="font-medium">Schedule a call</span>
          </a>
        </div>

        {/* Enhanced Contact Form */}
        <div className={`glass-card-premium rounded-3xl shadow-3xl p-8 md:p-10 border border-purple-200 transition-all duration-1000 hover:shadow-4xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Start Your Journey
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                  Your name
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    required
                    className={`transition-all duration-300 border-2 ${
                      focusedField === 'name' 
                        ? 'border-purple-500 ring-4 ring-purple-100 bg-white' 
                        : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                    }`}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Your email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    placeholder="name@company.com"
                    required
                    className={`transition-all duration-300 border-2 ${
                      focusedField === 'email' 
                        ? 'border-purple-500 ring-4 ring-purple-100 bg-white' 
                        : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                    }`}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
                  Phone Number
                </label>
                <div className="relative">
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phoneNumber')}
                    onBlur={handleBlur}
                    placeholder="+1 (123) 456-7890"
                    required
                    className={`transition-all duration-300 border-2 ${
                      focusedField === 'phoneNumber' 
                        ? 'border-purple-500 ring-4 ring-purple-100 bg-white' 
                        : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                    }`}
                  />
                  {focusedField === 'phoneNumber' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900">
                  Service of Interest
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus('service')}
                    onBlur={handleBlur}
                    className={`w-full p-3 rounded-lg transition-all duration-300 border-2 ${
                      focusedField === 'service' 
                        ? 'border-purple-500 ring-4 ring-purple-100 bg-white' 
                        : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                    }`}
                    required
                  >
                    <option value="free-call">Free Strategy Call</option>
                    <option value="novus">Novus - Social Media Management</option>
                    <option value="growth-labs">Growth Labs - Paid Ads</option>
                    <option value="koncept">Koncept - Content Creation</option>
                    <option value="other">Other</option>
                  </select>
                  {focusedField === 'service' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Your message
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder={formData.service === "free-call" ? "Let us know your availability for a call..." : "Tell us about your business and goals..."}
                  className={`transition-all duration-300 border-2 resize-none ${
                    focusedField === 'message' 
                      ? 'border-purple-500 ring-4 ring-purple-100 bg-white' 
                      : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                  }`}
                  required
                />
                {focusedField === 'message' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
            
            {formData.service === "free-call" ? (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="group flex-1 px-6 py-4 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Request
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button" 
                  onClick={handleBookFreeCall}
                  className="group flex-1 px-6 py-4 flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg font-semibold"
                >
                  <CalendarClock className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Book Directly
                </Button>
              </div>
            ) : (
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="group w-full px-6 py-4 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <style>{`
        .contact-bg-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .contact-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          animation: float 15s infinite ease-in-out;
        }
        .contact-orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #8B5CF6, #EC4899);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }
        .contact-orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          bottom: -150px;
          right: -150px;
          animation-delay: -5s;
        }
        .contact-orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #EC4899, #3B82F6);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(50px, 50px);
          }
          50% {
            transform: translate(0, 100px);
          }
          75% {
            transform: translate(-50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
