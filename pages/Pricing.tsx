import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                No hidden fees for users. Providers pay a small commission on successful bookings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* User Plan */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">For Users</h3>
                        <p className="text-gray-500 mb-6">Students, Freelancers & Teams</p>
                        <div className="flex justify-center items-baseline mb-6">
                            <span className="text-5xl font-extrabold text-gray-900">Free</span>
                        </div>
                        <ul className="text-left space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Browse and search unlimited listings
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                No booking fees
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Secure payment protection
                            </li>
                        </ul>
                        <Link to="/listings">
                            <Button className="w-full" size="lg">Start Booking</Button>
                        </Link>
                    </div>
                </div>

                {/* Provider Plan */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100 relative">
                     <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                        Partner
                     </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">For Venue Owners</h3>
                        <p className="text-gray-500 mb-6">Coworking Spaces, Hubs & Halls</p>
                        <div className="flex justify-center items-baseline mb-6">
                            <span className="text-5xl font-extrabold text-gray-900">10%</span>
                            <span className="text-gray-500 ml-2">per booking</span>
                        </div>
                        <ul className="text-left space-y-4 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                List unlimited spaces
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Dashboard & Analytics
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                24/7 Provider Support
                            </li>
                        </ul>
                         <Link to="/register?role=provider">
                            <Button variant="outline" className="w-full" size="lg">List Your Space</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};