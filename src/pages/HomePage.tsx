import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Users, FileText, Shield, CheckCircle, Star, Award, TrendingUp, Phone, Mail, MapPin, GraduationCap, BookOpen, Users2, Building } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Home className="h-8 w-8 text-blue-300" />,
      title: "Complete Buying Guide",
      description: "Aditya's step-by-step process from pre-approval to closing",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-300" />,
      title: "Selling Expertise",
      description: "Professional guidance to maximize your home's value",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: <FileText className="h-8 w-8 text-amber-300" />,
      title: "Essential Forms",
      description: "All necessary documents and forms explained clearly",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-300" />,
      title: "Expert Advice",
      description: "Aditya's insights to avoid common pitfalls",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  const credentials = [
    {
      icon: <GraduationCap className="h-8 w-8 text-red-400" />,
      title: "Harvard University",
      description: "Currently pursuing Business and Data Science",
      detail: "Applying Harvard's analytical thinking to real estate decisions",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      title: "Always Learning",
      description: "Regular workshops and real estate training",
      detail: "Staying up-to-date with market changes and new laws",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users2 className="h-8 w-8 text-green-400" />,
      title: "Professional Network",
      description: "Connected with top real estate experts",
      detail: "Access to industry leaders and professional resources",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Building className="h-8 w-8 text-purple-400" />,
      title: "Licensed Professional",
      description: "Massachusetts real estate license with Fathom Realty",
      detail: "Fully licensed and insured with ongoing training",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    
  ];

  const achievements = [
    {
      icon: <Award className="h-10 w-10 text-yellow-300" />,
      title: "Top Performer",
      description: "Consistently delivering excellent results for clients",
      number: "Rising Star",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-300" />,
      title: "Market Expert",
      description: "Deep knowledge of Massachusetts markets and trends",
      number: "Local Expert",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-300" />,
      title: "Happy Clients",
      description: "Satisfied families who trust Aditya's expertise",
      number: "Growing Base",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  const quickLinks = [
    {
      title: "Start Your Home Search",
      description: "Complete buying guide with step-by-step process",
      link: "/home-buying",
      icon: <Home className="h-6 w-6" />,
      color: "bg-blue-600 hover:bg-blue-500"
    },
    {
      title: "Sell Your Property",
      description: "Maximize your home's value with expert guidance",
      link: "/home-selling",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-teal-600 hover:bg-teal-500"
    },
    {
      title: "Get Expert Advice",
      description: "Learn what to watch out for in real estate",
      link: "/watch-out",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-purple-600 hover:bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Modern Design */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-6000"></div>
        </div>
        
        {/* Floating Elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-ping animation-delay-1000"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-80 animate-ping animation-delay-3000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-70 animate-ping animation-delay-5000"></div>
        </div> */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Section - With Real Photo */}
            <div className="mb-10">
              <div className="relative w-40 h-40 mx-auto mb-6 group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/Adi3.png"
                      alt="Aditya Patel"
                      className="w-32 h-32 rounded-full object-cover shadow-inner"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
                  Aditya Patel
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
                <p className="text-3xl md:text-4xl text-blue-200 font-semibold px-4">
                  Trusted Real Estate Agent
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
              </div>
              <p className="text-2xl text-blue-300 font-medium mb-4">
                Your Go-To Guy for Anything About Real Estate in Massachusetts
              </p>
             
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-medium">Licensed with Fathom Realty</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-5xl mx-auto leading-relaxed">
              Transform your real estate dreams into reality with Massachusetts' educated and dedicated agent. 
              I combine smart thinking from my Harvard education with deep local market knowledge to deliver exceptional results for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/home-buying"
                className="group relative bg-white text-blue-900 px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Journey with Aditya</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group relative border-3 border-white text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
              >
                Contact Aditya Today
                <Phone className="ml-3 h-6 w-6" />
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-200 font-medium">(978) 916-3958</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-200 font-medium">adipatel@fathomrealty.com</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-200 font-medium">All Massachusetts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials Section with Updated Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">World-Class</span> Education & Expertise
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aditya brings top-level education and ongoing training to every real estate deal, 
              making sure you get the best service and expert help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {credentials.map((credential, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${credential.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {credential.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{credential.title}</h3>
                    <p className="text-blue-600 font-medium mb-3 text-base">{credential.description}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{credential.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 via-blue-50 to-teal-50 rounded-3xl p-10 border border-red-100 shadow-xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Harvard Advantage in Real Estate</h3>
              <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-6">
                "My Harvard education is teaching me how to look at complex problems, think smart, and find good solutions step by step. 
                I use these same skills for every real estate deal, making sure you get the best possible result. 
                When you work with me, you're not just getting a real estate agent – you're getting someone who handles 
                your deal with the same care and excellence that Harvard teaches me."
              </p>
              <p className="text-gray-600 font-medium text-lg">- Aditya Patel, Harvard University Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Comprehensive</span> Real Estate Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need for a successful real estate transaction, backed by Aditya's expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:border-blue-300">
                  <div className="text-center">
                    <div className="mb-8 flex justify-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className={`group ${link.color} text-white rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-500 group-hover:scale-110">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                    <p className="text-base opacity-90 leading-relaxed">{link.description}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section with Realistic Content */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  Why Aditya is <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Massachusetts' Choice</span>
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  When you work with me, you're not just getting an agent – you're getting a dedicated partner 
                  who understands the Massachusetts market inside and out.
                </p>
              </div> */}

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-r ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          {achievement.icon}
                        </div>
                        <div className="text-4xl font-bold text-gray-900 mb-4">{achievement.number}</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{achievement.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-center">
                  {/* <h3 className="text-4xl font-bold mb-6">Aditya's Promise to You</h3> */}
                  <p className="text-2xl mb-6 text-blue-100 max-w-5xl mx-auto leading-relaxed">
                    "I believe that buying or selling a home should be an exciting journey, not a stressful ordeal. 
                    That's why I've created this comprehensive guide and why I'm personally committed to being your 
                    trusted advisor throughout the entire process."
                  </p>
                  <p className="text-3xl font-semibold text-white mb-2">Your success is my success.</p>
                  <p className="text-blue-200 font-medium text-xl">- Aditya Patel, Fathom Realty</p>
                </div>
              </div>
            </div>
      </section>

      {/* Testimonials with Enhanced Design */}

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Work with <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Aditya?</span>
          </h2>
          <p className="text-2xl mb-10 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Whether you're buying your first home, selling your current property, or looking for investment opportunities, 
            Aditya is here to guide you through every step with expertise you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-500 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Contact Aditya Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <a
              href="tel:(978)916-3958"
              className="group border-3 border-white text-white px-12 py-5 rounded-2xl font-semibold text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Call Now: (978) 916-3958
              <Phone className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;