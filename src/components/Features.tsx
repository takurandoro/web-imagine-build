
import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-purple-600">
            Our Services
          </h2>
          <p className="text-gray-500 sm:text-xl">
            Founded by Takura Ndoro (GuruNdoro), a marketing graduate with extensive experience in e-commerce, Frenies Studio is passionate about helping African businesses succeed online.
          </p>
        </div>

        {/* Free Call Lead Magnet */}
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-600 shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.01]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Strategy Call</h3>
              <p className="text-gray-600 mb-4">
                Not sure which service is right for your business? Schedule a free consultation call with Takura to discuss your goals and get expert advice on your social media strategy.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Personalized strategy assessment</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Expert advice from a certified marketing professional</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-purple-600" />
                  <span>No obligation, completely free</span>
                </li>
              </ul>
            </div>
            <div className="flex-none">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 transform transition-all hover:scale-105 flex items-center gap-2"
                onClick={() => window.open("https://calendar.app.google/akSVg2rC9YGMkj468", "_blank")}
              >
                Book Your Free Call
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50">
            <div className="h-2 bg-purple-600 rounded-t-lg"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold flex items-center">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                    <path d="M9 12v6"></path>
                    <path d="M13 12v6"></path>
                    <path d="M14 7.4c0 .34-.07.69-.18 1.1l-.3 1M8.5 7.4V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2.4"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9Z"></path>
                  </svg>
                </span>
                Novus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">
                Complete social media management service. We manage your Instagram and Facebook, posting your content while ensuring brand consistency.
              </p>
              <p className="text-xl font-bold mb-4 text-purple-600">$250/month</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Instagram Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Facebook Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Brand Consistency</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-6 w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white" onClick={() => location.href='#contact'}>
                Get Started
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
            <div className="absolute top-0 right-0">
              <div className="bg-purple-600 text-white text-xs font-semibold px-10 py-1 transform rotate-45 translate-x-7 -translate-y-2 shadow-lg">
                POPULAR
              </div>
            </div>
            <div className="h-2 bg-purple-600 rounded-t-lg"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold flex items-center">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h.01"></path>
                    <path d="M7 20v-4"></path>
                    <path d="M12 20v-8"></path>
                    <path d="M17 20V8"></path>
                    <path d="M22 4v16"></path>
                  </svg>
                </span>
                Growth Labs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">
                Our paid ads service where we run advertisements for your company using our own money until you get clients or leads.
              </p>
              <p className="text-xl font-bold mb-4 text-purple-600">$100 sign-up fee + 5% per lead / 10% per client</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Paid Advertisement</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Lead Generation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>No Upfront Ad Costs</span>
                </li>
              </ul>
              <Button className="mt-6 w-full bg-purple-600 hover:bg-purple-700" onClick={() => location.href='#contact'}>
                Get Started
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50">
            <div className="h-2 bg-purple-600 rounded-t-lg"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold flex items-center">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
                    <path d="M17.64 15 22 10.64"></path>
                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
                  </svg>
                </span>
                Koncept
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">
                Content creation service where we create engaging content for your brand including stills, reels, stories, and user-generated content (UGC).
              </p>
              <p className="text-xl font-bold mb-4 text-purple-600">Contact for pricing</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Content Creation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>Stills & Reels</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  <span>UGC Production</span>
                </li>
              </ul>
              <Button variant="outline" className="mt-6 w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white" onClick={() => location.href='#contact'}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
