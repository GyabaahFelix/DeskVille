import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Help Center</h1>
        
        <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I make a booking?</h3>
                <p className="text-gray-600">Simply browse our listings, select a space that suits your needs, choose your date and time, and click "Request to Book". You'll be prompted to make payment via Mobile Money or Card.</p>
            </div>

             <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I cancel my booking?</h3>
                <p className="text-gray-600">Yes, you can cancel up to 24 hours before your booking start time for a full refund. Cancellations made less than 24 hours in advance may be subject to a fee.</p>
            </div>

             <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I verify my account?</h3>
                <p className="text-gray-600">Go to your profile settings and upload a valid government ID. Verification helps keep our community safe.</p>
            </div>
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still need help?</h3>
            <p className="text-gray-500 mb-6">Our support team is available Mon-Fri, 9am - 5pm.</p>
            <a href="mailto:support@deskville.com" className="text-primary-600 font-bold hover:underline">Contact Support</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};