import logo from "../assets/logo-text.png";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
      <footer className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-5">
          {/* // Most left site */}
          <div className="md:col-span-2">
            <img src={logo} alt="footer image not found" className="mb-4" />
            <p className="text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 font-semibold text-gray-700">
              <p>GitHub</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
            </div>
          </div>
          {/* // middle leftsite */}
          <div>
            <p className="mb-4 text-lg font-bold">PRODUCT</p>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>
          {/* // middle rigthsite */}
          <div>
            <p className="mb-4 text-lg font-bold">COMPANY</p>
            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Projects</li>
            </ul>
          </div>

          {/* // rightsite */}
          <div>
            <p className="mb-4 text-lg font-bold">LEGAL</p>
            <ul className="space-y-2 text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <AiOutlineCopyright />
            <p>2026 Dev Stack. All rights reserved</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
