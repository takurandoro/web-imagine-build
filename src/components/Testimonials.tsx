
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Trusted by businesses worldwide
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Here's what our customers have to say about their experience with us.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
                  <p className="text-sm text-gray-500">CEO at Company</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              "We've been using Company for a few months now and it's transformed how we manage our business. The features are intuitive, and the customer support has been exceptional. Highly recommended!"
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&auto=format&fit=crop" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              "Company has helped us streamline our operations and save time on routine tasks. The analytics tools provide valuable insights that have directly contributed to our growth. Great platform!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
