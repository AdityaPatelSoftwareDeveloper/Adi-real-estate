import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HomeBuyingPage from './pages/HomeBuyingPage';
import HomeSellingPage from './pages/HomeSellingPage';
import FormsPage from './pages/FormsPage';
import WatchOutPage from './pages/WatchOutPage';
import ContactPage from './pages/ContactPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-buying" element={<HomeBuyingPage />} />
            <Route path="/home-selling" element={<HomeSellingPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/watch-out" element={<WatchOutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;