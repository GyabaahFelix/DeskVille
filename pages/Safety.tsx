import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Safety = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trust & Safety</h1>
        
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p className="mb-6">
            At DeskVille, safety is our top priority. We have implemented several measures to ensure that both users and providers can use our platform with confidence.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Verified Listings</h3>
          <p className="mb-4">
            Every space listed on DeskVille goes through a verification process. We check photos, amenities, and location details to ensure accuracy and quality standards.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Secure Payments</h3>
          <p className="mb-4">
            We partner with trusted payment gateways to handle all transactions securely. Your financial information is never stored on our servers.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Community Guidelines</h3>
          <p className="mb-4">
            We expect all members of our community to treat each other with respect. Harassment, discrimination, or unsafe behavior will not be tolerated and may result in permanent suspension from the platform.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">COVID-19 Safety</h3>
          <p className="mb-4">
            We encourage all venue providers to follow local health guidelines regarding sanitation and social distancing to ensure a safe working environment for everyone.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};