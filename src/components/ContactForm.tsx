
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarClock, Mail, Phone, ArrowRight, Check } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "free-call", // Default to free-call
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: formData.service === "free-call" 
          ? "Thank you for booking a free strategy call. We'll contact you shortly to schedule a time!"
          : "Thank you for your interest in Frenies Studio. We'll get back to you shortly!",
      });
      setFormData({ name: "", email: "", message: "", service: "free-call", phoneNumber: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleBookFreeCall = () => {
    window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank");
  };

  return (
    <section id="contact" className="bg-white py-24 relative">
      {/* Purple accent */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-3/4 bg-purple-100 rounded-bl-full opacity-50 z-0"></div>
      
      <div className="relative z-10 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-1 after:w-20 after:rounded-full after:bg-purple-600">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Ready to elevate your social media presence? Let's discuss how Frenies Studio can help your business grow online.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center">
          <a 
            href="mailto:freniestudio@gmail.com" 
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors bg-white shadow-md p-3 px-5 rounded-lg hover:shadow-lg"
          >
            <Mail className="h-5 w-5" /> 
            freniestudio@gmail.com
          </a>
          <a 
            href="tel:+263" 
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors bg-white shadow-md p-3 px-5 rounded-lg hover:shadow-lg"
          >
            <Phone className="h-5 w-5" /> 
            Contact via phone
          </a>
          <a 
            href="https://calendar.app.google/akSVg2rC9YGMkj468" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors bg-white shadow-md p-3 px-5 rounded-lg hover:shadow-lg"
          >
            <CalendarClock className="h-5 w-5" /> 
            Schedule a call
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-transform hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-gray-50 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  required
                  className="bg-gray-50 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 h-10"
                  required
                >
                  <option value="free-call">Free Strategy Call</option>
                  <option value="novus">Novus - Social Media Management</option>
                  <option value="growth-labs">Growth Labs - Paid Ads</option>
                  <option value="koncept">Koncept - Content Creation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder={formData.service === "free-call" ? "Let us know your availability for a call..." : "Tell us about your business and goals..."}
                className="bg-gray-50 border border-gray-300 focus:ring-purple-500 focus:border-purple-500 h-36"
                required
              />
            </div>
            
            {formData.service === "free-call" ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="px-5 py-3 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition transform hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Check className="h-5 w-5" />
                      Send Request
                    </>
                  )}
                </Button>
                <Button 
                  type="button" 
                  onClick={handleBookFreeCall}
                  className="px-5 py-3 flex items-center gap-2 bg-gray-800 hover:bg-gray-900 transition transform hover:scale-[1.02]"
                >
                  <CalendarClock className="h-5 w-5" />
                  Book Directly on Calendar
                </Button>
              </div>
            ) : (
              <Button 
                type="submit" 
                className="px-5 py-3 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition transform hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-5 w-5" />
                    Send message
                  </>
                )}
              </Button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
