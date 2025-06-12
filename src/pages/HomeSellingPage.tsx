import React from 'react';
import { Home, DollarSign, Users, Handshake, CheckCircle, TrendingUp, Camera, Calendar, Award } from 'lucide-react';

const HomeSellingPage = () => {
  const steps = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Step 1: Preparing Your Home for Maximum Value",
      description: "Aditya's proven home preparation strategy",
      details: [
        "Declutter every room completely - remove 50% of personal items and furniture",
        "Deep clean entire house including carpets, windows, and all surfaces",
        "Complete all necessary repairs: leaky faucets, squeaky doors, cracked walls",
        "Consider strategic improvements with high ROI: fresh paint, updated fixtures",
        "Enhance curb appeal: landscaping, power washing, front door refresh",
        "Stage key rooms to help buyers envision themselves living there",
        "Remove personal photos and items to create neutral, welcoming space",
        "Ensure all systems work properly: HVAC, plumbing, electrical"
      ],
      todoList: [
        "Walk through home with critical eye and make repair list",
        "Hire professional cleaning service for deep clean",
        "Paint walls in neutral colors (whites, light grays)",
        "Replace outdated light fixtures and hardware",
        "Trim bushes, plant flowers, and improve landscaping",
        "Rent storage unit for excess furniture and personal items",
        "Fix any obvious maintenance issues",
        "Consider professional staging consultation",
        "Update any outdated elements that are easy wins"
      ],
      adityaTips: [
        "I'll do a pre-listing walkthrough and provide a detailed preparation checklist specific to your home and target market.",
        "Small investments in preparation often return 3-5x in final sale price - I'll help you prioritize what matters most.",
        "I can recommend trusted contractors, cleaners, and stagers who do excellent work at fair prices."
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-teal-600" />,
      title: "Step 2: Strategic Pricing and Professional Marketing",
      description: "Aditya's data-driven pricing and marketing approach",
      details: [
        "Conduct comprehensive comparative market analysis (CMA) of recent sales",
        "Analyze current competition and market conditions",
        "Consider seasonal factors and local market trends",
        "Price strategically to attract multiple offers while maximizing value",
        "Create compelling listing description highlighting unique features",
        "Professional photography with proper lighting and staging",
        "Develop comprehensive marketing plan across all channels",
        "List on MLS and syndicate to major real estate websites"
      ],
      todoList: [
        "Review Aditya's detailed market analysis and pricing strategy",
        "Schedule professional photography session",
        "Prepare home for photos (staging, lighting, cleanliness)",
        "Review and approve listing description and marketing materials",
        "Discuss marketing timeline and strategy",
        "Prepare for listing to go live on MLS",
        "Plan for increased showing activity",
        "Set expectations for feedback and market response"
      ],
      adityaTips: [
        "I use advanced market analytics and my deep local knowledge to price your home perfectly - not too high to scare buyers, not too low to leave money on the table.",
        "Professional photography is non-negotiable in today's market - 95% of buyers start their search online.",
        "I have a comprehensive marketing system that ensures maximum exposure to qualified buyers."
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Step 3: Showings, Open Houses & Buyer Management",
      description: "Aditya's systematic approach to attracting qualified buyers",
      details: [
        "Schedule and coordinate all private showings efficiently",
        "Host strategic open houses for maximum exposure",
        "Respond promptly to all buyer inquiries and feedback",
        "Maintain property in show-ready condition throughout listing period",
        "Gather and analyze feedback from all showings",
        "Track showing activity and buyer interest levels",
        "Adjust strategy based on market response and feedback",
        "Pre-qualify potential buyers to focus on serious prospects"
      ],
      todoList: [
        "Keep home in pristine showing condition daily",
        "Be flexible with showing times to accommodate buyers",
        "Leave during all showings to let buyers explore freely",
        "Maintain neutral temperature and good lighting",
        "Keep pets secured during showings",
        "Review showing feedback with Aditya regularly",
        "Be prepared for last-minute showing requests",
        "Track all showing activity and buyer interest"
      ],
      adityaTips: [
        "I personally attend many showings to answer buyer questions and gauge their interest level - this helps us understand market response.",
        "I'll provide you with detailed feedback after each showing so we can adjust our strategy if needed.",
        "My goal is to create a sense of urgency and competition among buyers while maintaining a professional, welcoming atmosphere."
      ]
    },
    {
      icon: <Handshake className="h-8 w-8 text-emerald-600" />,
      title: "Step 4: Negotiating Offers & Managing the Sale",
      description: "Aditya's expert negotiation and transaction management",
      details: [
        "Review and evaluate all offers received with detailed analysis",
        "Negotiate not just price but all terms: contingencies, timeline, inclusions",
        "Handle multiple offer situations strategically to maximize value",
        "Manage inspection process and negotiate any repair requests",
        "Coordinate with buyer's financing and appraisal process",
        "Handle any issues that arise during the transaction",
        "Prepare for and conduct final walk-through with buyers",
        "Coordinate closing logistics and ensure smooth transfer of ownership"
      ],
      todoList: [
        "Review all offers carefully with Aditya's guidance",
        "Understand each buyer's financing and timeline",
        "Make informed decisions on counteroffers",
        "Prepare for home inspection and potential repair negotiations",
        "Stay flexible on closing timeline if needed",
        "Keep home in good condition through closing",
        "Prepare all necessary documents for closing",
        "Plan moving logistics around closing date"
      ],
      adityaTips: [
        "I'll present every offer with a detailed analysis of the buyer's qualifications, financing, and timeline - not all offers are equal.",
        "My negotiation experience helps maximize your net proceeds while keeping deals together through any challenges.",
        "I coordinate with all parties to ensure a smooth closing and will be there to handle any last-minute issues."
      ]
    }
  ];

  const marketingStrategy = [
    {
      icon: <Camera className="h-6 w-6 text-blue-600" />,
      title: "Professional Photography & Virtual Tours",
      description: "High-quality photos and 3D tours that showcase your home's best features"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "MLS and Syndication",
      description: "Maximum exposure across all major real estate websites and platforms"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Social Media Marketing",
      description: "Targeted social media campaigns to reach potential buyers"
    },
    {
      icon: <Calendar className="h-6 w-6 text-orange-600" />,
      title: "Strategic Open Houses",
      description: "Well-promoted open houses to create buzz and attract multiple buyers"
    }
  ];

  const sellingTimeline = [
    { phase: "Preparation", duration: "1-3 weeks", description: "Home prep, repairs, staging, and photography" },
    { phase: "Marketing Launch", duration: "1 week", description: "List on MLS, begin showings and marketing" },
    { phase: "Active Marketing", duration: "2-6 weeks", description: "Showings, open houses, and buyer interest" },
    { phase: "Under Agreement", duration: "30-45 days", description: "Inspections, appraisal, and buyer financing" },
    { phase: "Closing", duration: "1 day", description: "Final walk-through and closing day" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aditya's Complete Home Selling Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Maximize your home's value and sell with confidence using Aditya's proven step-by-step methodology. 
            This comprehensive guide covers everything from preparation to closing in the Massachusetts market, 
            with detailed action plans and expert insights from your trusted real estate professional.
          </p>
          <div className="bg-teal-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-teal-800">
              <strong>Aditya's Commitment:</strong> "I'll work tirelessly to get you the best possible price in the shortest time frame, 
              while making the process as stress-free as possible for you and your family."
            </p>
          </div>
        </div>

        {/* Selling Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Home Selling Timeline</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {sellingTimeline.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.phase}</h3>
                  <p className="text-sm text-teal-600 font-medium mb-2">{step.duration}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Process Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Detailed Steps */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Detailed Process:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* To-Do List */}
                  <div className="mb-6 bg-teal-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-teal-900 mb-3">Your Action Items:</h4>
                    <ul className="space-y-2">
                      {step.todoList.map((todo, todoIndex) => (
                        <li key={todoIndex} className="flex items-start space-x-3">
                          <div className="w-4 h-4 border-2 border-teal-600 rounded mt-1 flex-shrink-0"></div>
                          <span className="text-teal-800">{todo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Aditya's Tips */}
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-amber-900 mb-3">💡 Aditya's Expert Tips:</h4>
                    <ul className="space-y-2">
                      {step.adityaTips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-amber-800 italic">
                          "{tip}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Strategy */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aditya's Comprehensive Marketing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingStrategy.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Selling Tips */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aditya's Pro Tips for Maximum Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">First Impressions Are Everything</h3>
              <p className="text-gray-600">
                Buyers often decide within the first few minutes. Invest in curb appeal, staging, and professional presentation. 
                Aditya will help you identify the highest-impact improvements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Pricing Wins</h3>
              <p className="text-gray-600">
                Accurate pricing based on current market analysis attracts more buyers and often leads to multiple offers. 
                Aditya's pricing strategy maximizes your return.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Marketing Matters</h3>
              <p className="text-gray-600">
                High-quality photos, virtual tours, and strategic marketing reach the right buyers quickly. 
                Aditya's marketing system ensures maximum exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Massachusetts Market Advantages</h3>
            <p className="text-blue-800 mb-4">
              Key factors that help Massachusetts sellers:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• Strong job market and economy</li>
              <li>• Excellent schools and universities</li>
              <li>• Historic charm and character homes</li>
              <li>• Proximity to Boston and major cities</li>
              <li>• Four-season recreation opportunities</li>
            </ul>
            <p className="text-blue-800 mt-4 font-medium">
              Aditya knows how to highlight these advantages to attract buyers and maximize your home's appeal.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Seller Cost Breakdown</h3>
            <p className="text-green-800 mb-4">
              Typical costs when selling your home:
            </p>
            <ul className="space-y-2 text-green-700">
              <li>• Real estate commission: 5-6% of sale price</li>
              <li>• Attorney fees: $800-$1,500</li>
              <li>• Transfer taxes and stamps: ~$5 per $1,000</li>
              <li>• Home preparation: $2,000-$10,000</li>
              <li>• Moving costs: $1,000-$5,000</li>
            </ul>
            <p className="text-green-800 mt-4 font-medium">
              Aditya will provide a detailed net sheet showing your estimated proceeds from the sale.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Home with Aditya?</h2>
          <p className="text-xl mb-6 text-teal-100">
            Get a free market analysis and personalized selling strategy for your property. 
            Aditya will show you exactly what your home is worth and how to maximize its value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(617)555-0123"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
            >
              Call Aditya: (617) 555-0123
            </a>
            <a
              href="mailto:aditya@marealestate.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Email for Free Market Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSellingPage;