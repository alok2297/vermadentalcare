import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

function Contact() {
  return (
    <div className="flex items-center justify-center p-6 mt-[90px] lg:mt-[120px]">
      <div className="max-w-4xl w-full bg-white shadow-none lg:shadow-xl rounded-2xl p-8 ">
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Have questions? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <p className="text-gray-700">123 Dental Street, Smile City</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <p className="text-gray-700">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <p className="text-gray-700">support@dentalai.com</p>
            </div>
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.072137844135!2d78.96048597451376!3d29.221432575348356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a437df02e2521%3A0x7cfda1433d059ecf!2sVerma%20Dental%20Care!5e0!3m2!1sen!2sin!4v1739736866465!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer/>
    </div>
  );
};
export default ContactUs;
