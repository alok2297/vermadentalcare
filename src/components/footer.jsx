import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../img/vermadentalcarelogo.png"
export const Footer = () => {
  return (
    <footer className="py-5 px-6 text-gray-700 text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo} // Replace with actual logo path
            alt="Verma Dental Care"
            className="w-64"
          />
          <h3 className="text-lg font-semibold mt-2">
            Subscribe to our newsletter
          </h3>
          <div className="flex items-center mt-3 border border-gray-300 rounded-lg overflow-hidden w-full max-w-sm">
            <span className="px-3 text-gray-500">📧</span>
            <input
              type="email"
              placeholder="Input your email"
              className="flex-1 outline-none bg-transparent"
            />
            <button className="bg-blue-500 text-white px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-2 space-y-1">
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1">
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Plans & Pricing</h4>
            <ul className="mt-2 space-y-1">
              <li>Personal</li>
              <li>Start up</li>
              <li>Organization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© 2024 Verma Dental Care ・ Privacy ・ Terms ・ Sitemap</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaTwitter className="text-blue-500 cursor-pointer" size={20} />
            <FaFacebookF className="text-blue-600 cursor-pointer" size={20} />
            <FaLinkedinIn className="text-blue-700 cursor-pointer" size={20} />
            <FaYoutube className="text-red-500 cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};
