
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Frenies Studio</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Full-service social media management agency founded by Takura Ndoro (GuruNdoro).
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Services</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Novus - Social Media Management</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Growth Labs - Paid Ads</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Koncept - Content Creation</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="mailto:freniestudio@gmail.com" className="hover:underline flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </li>
                <li>
                  <a href="https://calendar.app.google/akSVg2rC9YGMkj468" target="_blank" rel="noopener noreferrer" className="hover:underline">Book a Call</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 <a href="/" className="hover:underline">Frenies Studio</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/freniesstudio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/frenies.zw/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <Instagram className="w-4 h-4" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="mailto:freniestudio@gmail.com" className="text-gray-500 hover:text-white">
              <Mail className="w-4 h-4" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
