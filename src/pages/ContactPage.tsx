import React from 'react';
import { Mail, Phone, MapPin, Clock, User, Award, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Top 10% Agent",
      description: "Consistently ranked in top 10% of Massachusetts agents"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Market Expert",
      description: "Deep knowledge of Massachusetts markets and trends"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Client Advocate",
      description: "Fierce negotiator protecting your interests"
    },
    {
      icon: <User className="h-8 w-8 text-purple-500" />,
      title: "Personal Service",
      description: "Direct access throughout your entire journey"
    }
  ];

  const services = [
    "First-Time Home Buyer Specialist",
    "Investment Property Expert", 
    "Luxury Home Marketing",
    "Market Analysis & Pricing Strategy",
    "Professional Negotiation",
    "Insurance Services & Protection",
    "Closing Coordination & Support",
    "Post-Sale Follow-up & Support"
  ];

  const testimonials = [
    
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Aditya Patel
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            Your Trusted Real Estate Agent & Go-To Guy for Anything About Real Estate
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to start your real estate journey with Massachusetts' most dedicated and knowledgeable agent? 
            Aditya is here to provide the expert guidance, personal service, and professional results you deserve.
          </p>
        </div>

        {/* Why Choose Aditya Section */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch with Aditya</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-lg">(617) 555-0123</p>
                    <p className="text-sm text-gray-500">Available 7 days a week</p>
                    <p className="text-sm text-blue-600 font-medium">Call or text anytime!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">aditya@marealestate.com</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                    <p className="text-sm text-blue-600 font-medium">Usually much faster!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">All of Massachusetts</p>
                    <p className="text-sm text-gray-500">Specializing in Greater Boston</p>
                    <p className="text-sm text-blue-600 font-medium">Will travel anywhere for you!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Availability</h3>
                    <div className="text-gray-600 text-sm">
                      <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 9:00 AM - 6:00 PM</p>
                    </div>
                    <p className="text-sm text-blue-600 font-medium">Emergency calls answered 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="tel:(617)555-0123"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Aditya Now</span>
                </a>
                <a
                  href="mailto:aditya@marealestate.com"
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Aditya</span>
                </a>
              </div>
            </div>
          </div>

          {/* Aditya's Services & Expertise */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Aditya's Complete Real Estate Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              {/* Aditya's Promise */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Aditya's Personal Promise to You</h3>
                <div className="space-y-3 text-blue-800">
                  <p>
                    <strong>"When you work with me, you're not just getting an agent - you're getting a dedicated partner 
                    who will fight for your interests every step of the way."</strong>
                  </p>
                  <p>
                    "I believe that buying or selling a home should be an exciting journey, not a stressful ordeal. 
                    That's why I've created this comprehensive guide and why I'm personally committed to being your 
                    trusted advisor throughout the entire process."
                  </p>
                  <p>
                    "Your success is my success. I won't rest until you're completely satisfied with the outcome."
                  </p>
                  <p className="text-right font-semibold">- Aditya Patel</p>
                </div>
              </div>

              {/* What Makes Aditya Different */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes Aditya Different</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Always Available</h4>
                    <p className="text-gray-600 text-sm">Direct access to Aditya, not an assistant or team member</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Local Expert</h4>
                    <p className="text-gray-600 text-sm">Raised in Massachusetts, knows every neighborhood</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technology Driven</h4>
                    <p className="text-gray-600 text-sm">Latest tools and marketing for maximum results</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Full Service</h4>
                    <p className="text-gray-600 text-sm">Real estate, insurance, and ongoing support</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="mb-4">
                  Don't wait - the best properties and opportunities move fast in today's market. 
                  Contact Aditya today and let's make your real estate goals a reality!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:(617)555-0123"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Call Now: (617) 555-0123
                  </a>
                  <a
                    href="mailto:aditya@marealestate.com"
                    className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        

        {/* Final CTA */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Your Real Estate Success Starts Here</h2>
          <p className="text-xl mb-6 text-gray-300">
            Join the hundreds of satisfied clients who have trusted Aditya with their most important real estate decisions. 
            Experience the difference that true expertise and personal service can make.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;