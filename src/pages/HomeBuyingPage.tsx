import React from 'react';
import { DollarSign, Search, FileText, Key, CheckCircle, Clock, Calculator, MapPin, Shield, Users, Home as HomeIcon } from 'lucide-react';

const HomeBuyingPage = () => {
  const steps = [
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Step 1: Understanding Your Finances",
      description: "Aditya's comprehensive financial preparation guide",
      details: [
        "Check your credit score and improve it if needed (aim for 620+ for conventional loans)",
        "Calculate your debt-to-income ratio (should be below 43% for most loans)",
        "Get pre-approved for a mortgage loan with multiple lenders for comparison",
        "Determine your down payment amount (3-20% depending on loan type)",
        "Factor in closing costs (2-5% of purchase price) and moving expenses",
        "Set aside emergency fund for unexpected repairs or issues",
        "Review and organize all financial documents (tax returns, pay stubs, bank statements)"
      ],
      todoList: [
        "Pull credit reports from all three bureaus",
        "Pay down high-interest debt to improve credit score",
        "Save for down payment and closing costs",
        "Get pre-approval letters from 2-3 different lenders",
        "Calculate maximum monthly payment you're comfortable with",
        "Research first-time buyer programs and grants",
        "Set up automatic savings for home purchase fund"
      ],
      adityaTips: [
        "I always recommend getting pre-approved before we start looking - it shows sellers you're serious and gives us a clear budget to work with.",
        "Don't just look at the monthly payment - consider property taxes, insurance, and HOA fees in your total housing cost.",
        "I can connect you with trusted lenders who offer competitive rates and excellent service."
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-teal-600" />,
      title: "Step 2: Searching for Your Perfect Home",
      description: "Aditya's strategic home search methodology",
      details: [
        "Define your must-haves vs. nice-to-haves with specific criteria",
        "Research neighborhoods thoroughly - schools, crime rates, future development",
        "Consider commute times during rush hour to work and important locations",
        "Evaluate local amenities: shopping, restaurants, parks, healthcare",
        "Understand property taxes and how they vary by town in Massachusetts",
        "Research resale value and market trends in target areas",
        "Consider future needs: family growth, aging in place, investment potential"
      ],
      todoList: [
        "Create detailed wish list with priorities ranked",
        "Research school districts if children are a factor",
        "Drive through neighborhoods at different times/days",
        "Check local crime statistics and safety ratings",
        "Research property tax rates by municipality",
        "Look up recent sales and market trends",
        "Visit open houses to get feel for different areas",
        "Schedule private showings with Aditya for serious contenders"
      ],
      adityaTips: [
        "I'll set up custom MLS searches based on your criteria and send you new listings immediately when they hit the market.",
        "Massachusetts has very different property tax rates by town - I'll help you understand the long-term cost implications.",
        "I know the local markets intimately and can provide insights about neighborhoods that you won't find online."
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Step 3: Making a Winning Offer",
      description: "Aditya's proven negotiation and offer strategy",
      details: [
        "Research comparable sales (comps) in the area from last 3-6 months",
        "Determine your maximum offer price before viewing the property",
        "Include appropriate contingencies: inspection, financing, appraisal",
        "Consider escalation clauses in competitive markets",
        "Negotiate terms beyond price: closing date, repairs, inclusions",
        "Understand seller's motivation and timeline for strategic advantage",
        "Prepare for counteroffers and have response strategy ready"
      ],
      todoList: [
        "Review comparable sales with Aditya",
        "Determine offer price strategy",
        "Decide on contingency periods (inspection, financing)",
        "Choose closing date that works for all parties",
        "Prepare earnest money deposit",
        "Review all offer terms before submission",
        "Plan response strategy for potential counteroffers",
        "Have backup properties identified in case offer is rejected"
      ],
      adityaTips: [
        "I'll prepare a comprehensive market analysis for every property you're considering to ensure you make competitive but fair offers.",
        "In Massachusetts, we often see multiple offer situations - I have strategies to make your offer stand out beyond just price.",
        "I'll handle all negotiations on your behalf and keep you informed throughout the process."
      ]
    },
    {
      icon: <Key className="h-8 w-8 text-emerald-600" />,
      title: "Step 4: Inspections, Appraisal & Closing",
      description: "Aditya's comprehensive closing process management",
      details: [
        "Schedule professional home inspection within contingency period",
        "Attend inspection and take detailed notes on any issues found",
        "Review inspection report and negotiate repairs or credits with seller",
        "Ensure appraisal meets or exceeds contract price",
        "Finalize mortgage application and provide any additional documentation",
        "Conduct final walk-through 24-48 hours before closing",
        "Review all closing documents with attorney before signing",
        "Coordinate moving logistics and utility transfers"
      ],
      todoList: [
        "Schedule home inspection immediately after offer acceptance",
        "Research and hire qualified inspector",
        "Attend inspection and ask questions",
        "Review inspection report thoroughly",
        "Negotiate repair requests or credits if needed",
        "Stay in touch with lender for appraisal and final approval",
        "Schedule final walk-through",
        "Arrange homeowner's insurance",
        "Prepare certified funds for closing",
        "Schedule utility transfers and address changes"
      ],
      adityaTips: [
        "I'll recommend trusted inspectors and be present during the inspection to help you understand any issues.",
        "I'll guide you through the repair negotiation process to ensure you get fair resolution on any problems found.",
        "I'll coordinate with all parties to ensure a smooth closing and be there with you on closing day."
      ]
    }
  ];

  const timelineSteps = [
    { phase: "Pre-Approval", duration: "1-2 weeks", description: "Get finances in order and obtain pre-approval" },
    { phase: "House Hunting", duration: "2-8 weeks", description: "Search for and view properties with Aditya" },
    { phase: "Offer & Negotiation", duration: "1-2 weeks", description: "Make offer and negotiate terms" },
    { phase: "Under Contract", duration: "30-45 days", description: "Inspections, appraisal, and final loan approval" },
    { phase: "Closing", duration: "1 day", description: "Final walk-through and closing day" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aditya's Complete Home Buying Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Navigate the Massachusetts home buying process with confidence using Aditya's proven step-by-step methodology. 
            This comprehensive guide will walk you through each phase from pre-approval to closing, with detailed to-do lists 
            and expert insights from your trusted real estate professional.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-blue-800">
              <strong>Aditya's Promise:</strong> "I'll be with you every step of the way, ensuring you understand each phase 
              and feel confident in every decision. Your success is my priority."
            </p>
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Home Buying Timeline</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {timelineSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.phase}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{step.duration}</p>
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
                  <div className="mb-6 bg-blue-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">Your Action Items:</h4>
                    <ul className="space-y-2">
                      {step.todoList.map((todo, todoIndex) => (
                        <li key={todoIndex} className="flex items-start space-x-3">
                          <div className="w-4 h-4 border-2 border-blue-600 rounded mt-1 flex-shrink-0"></div>
                          <span className="text-blue-800">{todo}</span>
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

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">First-Time Buyer Programs</h3>
            <p className="text-blue-800 mb-4">
              Massachusetts offers several programs to help first-time buyers:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• MassHousing First-Time Buyer Programs</li>
              <li>• ONE Mortgage Program</li>
              <li>• FHA Loans with 3.5% down</li>
              <li>• VA Loans for veterans (0% down)</li>
              <li>• USDA Rural Development Loans</li>
            </ul>
            <p className="text-blue-800 mt-4 font-medium">
              Aditya can help you explore which programs you qualify for and connect you with approved lenders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Massachusetts Market Insights</h3>
            <p className="text-teal-800 mb-4">
              Key factors affecting the Massachusetts real estate market:
            </p>
            <ul className="space-y-2 text-teal-700">
              <li>• Seasonal market patterns (spring/summer peak)</li>
              <li>• Property tax variations by municipality</li>
              <li>• School district impact on home values</li>
              <li>• Commuter rail access premium</li>
              <li>• Historic district considerations</li>
            </ul>
            <p className="text-teal-800 mt-4 font-medium">
              Aditya's local expertise helps you understand these nuances and make informed decisions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Buying Journey with Aditya?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Every home buying situation is unique. Let's discuss your specific needs and create a personalized plan 
            that gets you into your dream home efficiently and confidently.
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
              Email Aditya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBuyingPage;