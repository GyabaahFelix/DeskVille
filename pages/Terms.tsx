import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose text-gray-600">
          <p className="mb-4">Last updated: October 2023</p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By accessing and using DeskVille, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Description of Service</h3>
          <p className="mb-4">
            DeskVille provides a platform for users to find and book workspaces. We are not a party to any rental or other agreement between users and providers.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. User Conduct</h3>
          <p className="mb-4">
            You agree to use the site only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others or otherwise cause damage to the site or the Content.
          </p>
          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Limitation of Liability</h3>
          <p className="mb-4">
            The site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};