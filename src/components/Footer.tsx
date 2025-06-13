import React from 'react';
import { Mail, Phone, MapPin, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Aditya */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Aditya Patel</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted real estate agent and go-to guy for anything about real estate in Massachusetts. 
              Providing comprehensive guidance for home buyers and sellers with professional expertise and personalized service.
            </p>
            <p className="text-blue-300 font-medium italic">
              "Making your real estate dreams a reality, one client at a time."
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Aditya</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(978) 916-3958</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>adipatel@fathomrealty.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Serving all of Massachusetts</span>
              </div>
            </div>
          </div>

          {/* Expertise List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Aditya's Expertise</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• First-Time Home Buyer Specialist</li>
              <li>• Investment Property Expert</li>
              <li>• Market Analysis & Pricing</li>
              <li>• Negotiation Specialist</li>
              <li>• Insurance Services</li>
              <li>• Closing Support & Guidance</li>
            </ul>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
          <div className="flex items-center space-x-6">
            <img
              src="/assets/FathomLogo.png"
              alt="Fathom Realty Logo"
              className="h-12 md:h-14 w-auto"
            />
            <img
              src="/assets/RealtorLogo.jpg"
              alt="Equal Housing & REALTOR®"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          <p className="text-center text-sm text-gray-500 mt-4 md:mt-0">
            &copy; 2025 Aditya Patel Real Estate Services. Licensed in MA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;