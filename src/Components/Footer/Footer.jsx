import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="font-outfit bg-[#f9fbfb] text-[#627884] relative">

      {/* Top Divider */}
      <div className="w-full h-[1px] bg-[#e6eff2] mb-10"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-5 md:pt-20 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#1abc9c] flex items-center justify-center text-white font-bold">
              T
            </div>
            <h2 className="text-xl font-bold text-[#1d2930]">
              Teeth<span className="text-[#1abc9c]">Wizard</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner for exceptional dental care.
            <br />
            Creating beautiful smiles since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#1d2930] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#1abc9c] ${isActive ? "text-[#1abc9c] font-semibold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-treatments"
                className={({ isActive }) =>
                  `hover:text-[#1abc9c] ${isActive ? "text-[#1abc9c] font-semibold" : ""}`
                }
              >
                All Treatments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `hover:text-[#1abc9c] ${isActive ? "text-[#1abc9c] font-semibold" : ""}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-appointments"
                className={({ isActive }) =>
                  `hover:text-[#1abc9c] ${isActive ? "text-[#1abc9c] font-semibold" : ""}`
                }
              >
                My Appointments
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#1d2930] mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Teeth Cleaning</li>
            <li>Teeth Whitening</li>
            <li>Orthodontic Braces</li>
            <li>Dental Filling</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#1d2930] mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:+8801811501751"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-[#1abc9c]"
              >
                <Phone size={16} className="text-[#1abc9c]" />
                +880 1811-501751
              </a>
            </li>

            <li>
              <a
                href="mailto:siamsarker189@gmail.com"
                className="flex items-center gap-2 justify-center md:justify-start hover:text-[#1abc9c]"
              >
                <Mail size={16} className="text-[#1abc9c]" />
                siamsarker189@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} className="text-[#1abc9c]" />
              123 Dental Ave, Health City
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="w-10/12 h-[1px] bg-[#e6eff2] mx-auto mb-5"></div>

      {/* Copyright */}
      <div className="text-center text-sm py-6 text-[#627884]">
        © 2025 TeethWizard. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
