
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarClock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "free-call", // Changed default to free-call
    phoneNumber: "", // Added phone number field
  });

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
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: formData.service === "free-call" 
        ? "Thank you for booking a free strategy call. We'll contact you shortly to schedule a time!"
        : "Thank you for your interest in Frenies Studio. We'll get back to you shortly!",
    });
    setFormData({ name: "", email: "", message: "", service: "free-call", phoneNumber: "" });
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Ready to elevate your social media presence? Let's discuss how Frenies Studio can help your business grow online.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
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
            />
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="free-call">Free Strategy Call</option>
              <option value="novus">Novus - Social Media Management</option>
              <option value="growth-labs">Growth Labs - Paid Ads</option>
              <option value="koncept">Koncept - Content Creation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
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
              className="h-36"
              required
            />
          </div>
          <Button type="submit" className="px-5 py-3 flex items-center gap-2">
            {formData.service === "free-call" ? (
              <>
                <CalendarClock className="h-5 w-5" />
                Book Free Strategy Call
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
