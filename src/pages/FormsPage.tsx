import React from 'react';
import { FileText, Users, Home } from 'lucide-react';

const FormsPage = () => {
  const buyerForms = [
    {
      name: "Buyer's Agency Agreement",
      description: "Establishes the relationship between buyer and Aditya as your agent",
      category: "Pre-Purchase",
      adityaNote: "This protects your interests and ensures I'm working exclusively for you throughout the process."
    },
    {
      name: "Pre-Approval Letter Template",
      description: "What to expect in your mortgage pre-approval documentation",
      category: "Financing",
      adityaNote: "I'll help you understand what lenders are looking for and connect you with trusted mortgage professionals."
    },
    {
      name: "Offer to Purchase Form",
      description: "Standard Massachusetts purchase offer form with Aditya's guidance",
      category: "Offers",
      adityaNote: "I'll walk you through every line of this form and help you craft competitive offers."
    },
    {
      name: "Inspection Contingency Addendum",
      description: "Protect yourself with proper inspection terms",
      category: "Contingencies",
      adityaNote: "Never waive inspections! I'll explain how to use this contingency to protect your investment."
    },
    {
      name: "Purchase and Sale Agreement",
      description: "Final purchase contract for Massachusetts transactions",
      category: "Contracts",
      adityaNote: "This is the binding contract - I'll review every detail with you before signing."
    },
    {
      name: "Home Inspection Checklist",
      description: "What to look for during property inspection",
      category: "Inspections",
      adityaNote: "I'll attend the inspection with you and help you understand any issues found."
    },
    {
      name: "Closing Day Checklist",
      description: "Essential items for a smooth closing with Aditya",
      category: "Closing",
      adityaNote: "I'll be there with you on closing day to ensure everything goes smoothly."
    },
    {
      name: "First-Time Buyer Guide",
      description: "Aditya's complete guide for first-time homebuyers",
      category: "Education",
      adityaNote: "My comprehensive guide covering everything first-time buyers need to know about the Massachusetts market."
    }
  ];

  const sellerForms = [
    {
      name: "Seller's Disclosure Statement",
      description: "Required disclosure of known property conditions",
      category: "Disclosures",
      adityaNote: "I'll help you complete this accurately to avoid any legal issues down the road."
    },
    {
      name: "Listing Agreement",
      description: "Agreement between you and Aditya for selling your home",
      category: "Listing",
      adityaNote: "This outlines my marketing strategy and commission structure - everything is transparent."
    },
    {
      name: "Property Information Sheet",
      description: "Detailed property information for Aditya's marketing",
      category: "Marketing",
      adityaNote: "I'll help you highlight your home's best features to attract the right buyers."
    },
    {
      name: "Lead Paint Disclosure",
      description: "Required for homes built before 1978",
      category: "Disclosures",
      adityaNote: "Massachusetts law requires this disclosure - I'll ensure you're fully compliant."
    },
    {
      name: "Purchase and Sale Agreement",
      description: "Standard Massachusetts sale contract",
      category: "Contracts",
      adityaNote: "I'll negotiate the best terms for you and explain every aspect of the contract."
    },
    {
      name: "Closing Document Checklist",
      description: "Items needed for a smooth closing process",
      category: "Closing",
      adityaNote: "I'll coordinate with all parties to ensure you have everything needed for closing day."
    },
    {
      name: "Property Condition Report",
      description: "Document current condition of property",
      category: "Inspections",
      adityaNote: "This helps set proper expectations with buyers and can prevent issues later."
    },
    {
      name: "Seller's Net Sheet Calculator",
      description: "Estimate your proceeds from the sale",
      category: "Financial",
      adityaNote: "I'll provide you with a detailed breakdown of your expected net proceeds from the sale."
    }
  ];

  const FormCard = ({ form, index }: { form: any, index: number }) => (
    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {form.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.name}</h3>
          <p className="text-gray-600 mb-3">{form.description}</p>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>Aditya's Note:</strong> {form.adityaNote}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium">
        Available When Working with Aditya
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential Forms & Documents with Aditya's Guidance
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Access all the essential forms and documents you need for your Massachusetts real estate transaction. 
            Aditya will guide you through each form, explain every detail, and ensure you understand exactly what you're signing.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-blue-800">
              <strong>Aditya's Promise:</strong> "You'll never sign a document you don't understand. I'll explain every form, 
              every clause, and every implication so you can make informed decisions with confidence."
            </p>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">For Home Buyers</h2>
            </div>
            <p className="text-blue-100 mb-6">
              Forms and documents to guide you through the purchasing process with Aditya's expert assistance
            </p>
            <div className="text-lg font-semibold">
              {buyerForms.length} Essential Forms Available
            </div>
            <p className="text-blue-200 mt-2 text-sm">
              Each form comes with Aditya's personal guidance and explanation
            </p>
          </div>

          <div className="bg-teal-600 rounded-2xl p-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">For Home Sellers</h2>
            </div>
            <p className="text-teal-100 mb-6">
              Essential documents to help you sell your property successfully with Aditya's proven strategies
            </p>
            <div className="text-lg font-semibold">
              {sellerForms.length} Essential Forms Available
            </div>
            <p className="text-teal-200 mt-2 text-sm">
              Complete with Aditya's insights and professional guidance
            </p>
          </div>
        </div>

        {/* Buyer Forms Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Home className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Forms for Home Buyers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            When you work with Aditya, you'll have access to all these forms with detailed explanations and guidance. 
            No more confusion about what you're signing - Aditya makes sure you understand everything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerForms.map((form, index) => (
              <FormCard key={`buyer-${index}`} form={form} index={index} />
            ))}
          </div>
        </section>

        {/* Seller Forms Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-bold text-gray-900">Forms for Home Sellers</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Selling your home involves many important documents. Aditya will handle the paperwork professionally 
            and ensure you understand every aspect of the selling process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellerForms.map((form, index) => (
              <FormCard key={`seller-${index}`} form={form} index={index} />
            ))}
          </div>
        </section>

        {/* Aditya's Document Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Aditya's Document Review Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Preparation</h3>
              <p className="text-gray-600">
                Aditya prepares all documents in advance and reviews them for accuracy and completeness before presenting them to you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Explanation</h3>
              <p className="text-gray-600">
                Every form is explained line by line. Aditya ensures you understand the purpose, implications, and your rights and obligations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Execution</h3>
              <p className="text-gray-600">
                Once you're comfortable and understand everything, Aditya guides you through the signing process and handles all submissions.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <FileText className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Important Notice About Real Estate Forms</h3>
              <div className="text-amber-800 space-y-3">
                <p>
                  <strong>Professional Guidance Required:</strong> Real estate forms are legal documents that can have significant 
                  financial and legal implications. These forms should only be completed with professional guidance.
                </p>
                <p>
                  <strong>Massachusetts Law Compliance:</strong> All forms must comply with current Massachusetts real estate laws 
                  and regulations, which can change. Aditya stays current with all legal requirements.
                </p>
                <p>
                  <strong>Personalized Service:</strong> Every transaction is unique. Aditya provides personalized assistance 
                  with all forms, ensuring they're properly completed for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with a Professional?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Don't navigate the paperwork alone. Aditya will handle all the forms professionally and ensure 
            you understand every document you sign. Your peace of mind is his priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(617)555-0123"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Call Aditya: (617) 555-0123
            </a>
            <a
              href="mailto:aditya@marealestate.com"
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

export default FormsPage;