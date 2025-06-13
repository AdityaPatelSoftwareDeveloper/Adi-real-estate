import React from 'react';
import { AlertTriangle, ShieldAlert, DollarSign, Clock, CheckCircle, XCircle, Award } from 'lucide-react';

const WatchOutPage = () => {
  const buyerWarnings = [
    {
      icon: <DollarSign className="h-6 w-6 text-red-500" />,
      title: "Skipping Pre-Approval",
      warning: "Don't start house hunting without knowing your true budget",
      consequence: "You may fall in love with homes you can't afford or miss out on competitive offers because sellers won't take you seriously",
      solution: "Get pre-approved before viewing properties to understand your buying power",
      adityaAdvice: "I always insist my buyers get pre-approved first. It saves time, prevents heartbreak, and makes your offers much stronger. I can connect you with trusted lenders who offer competitive rates."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Rushing the Inspection",
      warning: "Never waive inspection contingencies to make your offer more competitive",
      consequence: "You could inherit expensive problems like structural issues, electrical problems, HVAC failures, or hidden water damage",
      solution: "Always include inspection contingencies and attend the inspection yourself",
      adityaAdvice: "I've seen buyers lose tens of thousands by skipping inspections. I'll help you write competitive offers that still protect you with proper contingencies. I also attend inspections with you to help interpret the findings."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-red-500" />,
      title: "Emotional Decision Making",
      warning: "Don't let emotions override logic when making offers",
      consequence: "You may overpay significantly, ignore red flags, or make decisions you'll regret later",
      solution: "Set a maximum budget beforehand and stick to it, regardless of emotions",
      adityaAdvice: "I help my clients stay objective by providing market data and comparable sales. When emotions run high, I'm there to provide the logical perspective you need to make smart decisions."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "Ignoring Additional Costs",
      warning: "Don't forget about closing costs, moving expenses, and immediate repairs",
      consequence: "You may run out of money before closing or be unable to afford necessary improvements",
      solution: "Budget for 3-5% of purchase price in additional costs beyond down payment",
      adityaAdvice: "I provide all my buyers with a comprehensive cost breakdown so there are no surprises. This includes closing costs, moving expenses, immediate repairs, and ongoing maintenance costs."
    }
  ];

  const sellerWarnings = [
    {
      icon: <DollarSign className="h-6 w-6 text-orange-500" />,
      title: "Overpricing Your Home",
      warning: "Setting an unrealistic asking price based on what you 'need' to get",
      consequence: "Your home will sit on the market longer, become stale, and ultimately sell for less than if priced correctly initially",
      solution: "Price based on current market conditions and comparable sales, not your financial needs",
      adityaAdvice: "I use comprehensive market analysis to price your home strategically. The goal is to attract multiple offers and create competition, which often results in selling above asking price."
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Poor Presentation",
      warning: "Listing your home without proper cleaning, decluttering, or staging",
      consequence: "Buyers can't envision themselves in the space and may offer significantly less or pass entirely",
      solution: "Invest in professional cleaning, decluttering, and consider staging key rooms",
      adityaAdvice: "I provide a detailed preparation checklist and can recommend trusted professionals for cleaning, staging, and minor repairs. Small investments in presentation often return 3-5x in final sale price."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-orange-500" />,
      title: "Inflexible Negotiation",
      warning: "Being unwilling to negotiate on price, terms, or repair requests",
      consequence: "You'll lose qualified buyers to more flexible sellers in the market",
      solution: "Stay open to reasonable negotiations while protecting your core interests",
      adityaAdvice: "I handle all negotiations on your behalf, using my experience to know when to stand firm and when to compromise. My goal is to get you the best possible terms while keeping the deal together."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      title: "Inadequate Marketing",
      warning: "Relying only on MLS listing without professional photos or comprehensive marketing",
      consequence: "Your home won't reach its full market potential and may sell below value",
      solution: "Invest in professional photography, virtual tours, and comprehensive marketing strategy",
      adityaAdvice: "I use a comprehensive marketing system including professional photography, virtual tours, social media marketing, and targeted advertising to ensure maximum exposure to qualified buyers."
    }
  ];

  const generalTips = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Work with Qualified Professionals",
      description: "Use licensed real estate agents, attorneys, inspectors, and lenders",
      adityaNote: "I have a network of trusted professionals I work with regularly and can recommend the best for your specific needs."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Read Everything Carefully",
      description: "Never sign documents you don't understand - ask questions",
      adityaNote: "I explain every document line by line and ensure you understand exactly what you're signing before we proceed."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Keep Detailed Records",
      description: "Document all communications, agreements, and financial transactions",
      adityaNote: "I maintain detailed records of our entire transaction and provide you with copies of all important documents and communications."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Plan for the Unexpected",
      description: "Have contingency funds for repairs, delays, or market changes",
      adityaNote: "I help you prepare for various scenarios and develop contingency plans so you're never caught off guard."
    }
  ];

  const WarningCard = ({ warning, index, color }: { warning: any, index: number, color: string }) => (
    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          {warning.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{warning.title}</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-red-600 mb-1">⚠️ Warning:</p>
              <p className="text-gray-700">{warning.warning}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-orange-600 mb-1">📉 Consequence:</p>
              <p className="text-gray-700">{warning.consequence}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-green-600 mb-1">✅ Solution:</p>
              <p className="text-gray-700">{warning.solution}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm font-medium text-blue-900 mb-1">💡 Aditya's Advice:</p>
              <p className="text-blue-800 italic">"{warning.adityaAdvice}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aditya's Expert Warnings: Avoid These Costly Mistakes
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Learn from Aditya's years of experience helping clients navigate real estate transactions. 
            Avoid these common mistakes that can cost you time, money, and peace of mind. 
            When you work with Aditya, you get the benefit of his expertise protecting you every step of the way.
          </p>
          <div className="bg-amber-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-amber-800">
              <strong>Aditya's Commitment:</strong> "I've seen these mistakes cost people thousands of dollars and months of stress. 
              My job is to guide you around these pitfalls so your transaction is smooth and successful."
            </p>
          </div>
        </div>

        {/* For Buyers Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Critical Warnings for Home Buyers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            These are the most common and costly mistakes Aditya sees buyers make. When you work with him, 
            he'll guide you around these pitfalls and protect your interests throughout the process.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {buyerWarnings.map((warning, index) => (
              <WarningCard key={`buyer-${index}`} warning={warning} index={index} color="red" />
            ))}
          </div>
          
          {/* Additional Buyer Tips */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Additional Buyer Protection Tips from Aditya</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• "Don't make major purchases or change jobs during the mortgage process - I'll remind you of this"</li>
              <li>• "Get homeowner's insurance quotes before closing so you can budget accurately"</li>
              <li>• "I'll help you research neighborhoods at different times of day and week"</li>
              <li>• "Understand HOA fees and restrictions before making an offer - I'll review these with you"</li>
              <li>• "Keep your pre-approval letter updated if house hunting takes months - I'll coordinate with your lender"</li>
            </ul>
          </div>
        </section>

        {/* For Sellers Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <ShieldAlert className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Critical Warnings for Home Sellers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Selling mistakes can cost you tens of thousands of dollars. Aditya's proven strategies help you 
            avoid these common pitfalls and maximize your home's value.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {sellerWarnings.map((warning, index) => (
              <WarningCard key={`seller-${index}`} warning={warning} index={index} color="orange" />
            ))}
          </div>

          {/* Additional Seller Tips */}
          <div className="bg-teal-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-teal-900 mb-4">💡 Additional Seller Protection Tips from Aditya</h3>
            <ul className="space-y-2 text-teal-800">
              <li>• "Complete disclosure forms honestly - I'll help you do this properly to avoid legal issues"</li>
              <li>• "Don't take lowball offers personally - I'll handle all negotiations professionally"</li>
              <li>• "Be flexible with showing times to accommodate more buyers - I'll coordinate everything"</li>
              <li>• "Keep your home show-ready throughout the listing period - I'll provide ongoing guidance"</li>
              <li>• "Understand that buyer financing can fall through - I'll help you have backup plans"</li>
            </ul>
          </div>
        </section>

        {/* General Best Practices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aditya's Universal Best Practices</h2>
            <p className="text-lg text-gray-600">
              Whether buying or selling, these principles will serve you well - and Aditya ensures you follow them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 mb-3">{tip.description}</p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        <strong>How Aditya Helps:</strong> {tip.adityaNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags Section */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-900 mb-4">🚨 Major Red Flags - Aditya Will Protect You From These</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-800 mb-4">
                <ul className="space-y-2">
                  <li>• Pressure to sign immediately without review time</li>
                  <li>• Unlicensed agents or service providers</li>
                  <li>• Requests for large upfront fees</li>
                  <li>• Unwillingness to provide references</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Prices significantly above or below market</li>
                  <li>• Refusal to allow inspections</li>
                  <li>• Poor communication or evasive answers</li>
                  <li>• Incomplete or suspicious documentation</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>Aditya's Protection:</strong> "I've been in this business long enough to spot these red flags immediately. 
                  When you work with me, you get the benefit of my experience and my commitment to protecting your interests."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Navigate Real Estate Alone</h2>
          <p className="text-xl mb-6 text-blue-100">
            Why risk costly mistakes when you can have Aditya's expertise protecting you every step of the way? 
            His experience and guidance can save you thousands of dollars and months of stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(978)916-3958"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Call Aditya: (978) 916-3958
            </a>
            <a
              href="mailto:adipatel@fathomrealty.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email for Expert Guidance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOutPage;