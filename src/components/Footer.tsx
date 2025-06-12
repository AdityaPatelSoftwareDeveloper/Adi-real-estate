import React from 'react';
import { Mail, Phone, MapPin, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Aditya Patel</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted real estate agent and go-to guy for anything about real estate in Massachusetts. 
              Providing comprehensive guidance for home buyers and sellers with professional expertise and personalized service.
            </p>
            <p className="text-blue-300 font-medium">
              "Making your real estate dreams a reality, one client at a time."
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Aditya</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(617) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">aditya@marealestate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Serving all of Massachusetts</span>
              </div>
            </div>
          </div>

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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Aditya Patel Real Estate Services. All rights reserved. Licensed Real Estate Professional in Massachusetts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;