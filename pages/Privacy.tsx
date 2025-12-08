import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose text-gray-600">
          <p className="mb-4">Last updated: October 2023</p>
          <p className="mb-4">
            Your privacy is important to us. It is DeskVille's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Information We Collect</h3>
          <p className="mb-4">
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Usage of Information</h3>
          <p className="mb-4">
            We may use your personal information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Data Protection</h3>
          <p className="mb-4">
            We retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};