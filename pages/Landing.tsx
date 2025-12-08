import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Category } from '../types';
import { ListingCard } from '../components/ListingCard';
import { MOCK_LISTINGS } from '../services/mockData';

export const Landing = () => {
  const featuredListings = MOCK_LISTINGS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Workspace" 
            className="w-full h-full object-cover opacity-60" 
          />
          {/* Reduced gradient opacity for a lighter feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
            Your Space, <span className="text-primary-500">Your Productivity.</span>
          </h1>
          <p className="max-w-2xl text-xl text-white mb-10 font-medium drop-shadow-md">
            DeskVille connects you with the perfect place to work, study, or host professional events in Ghana — quickly, conveniently, and reliably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Link to="/listings" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-14 text-lg shadow-lg">Browse Spaces</Button>
            </Link>
            <Link to="/register?role=provider" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-14 text-lg border-white text-white hover:bg-white hover:text-gray-900 shadow-lg">List Your Space</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary-600 border-y border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-1">2,000+</div>
              <div className="text-primary-100 text-sm font-medium uppercase tracking-wider">Desks Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-primary-100 text-sm font-medium uppercase tracking-wider">Regions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">150+</div>
              <div className="text-primary-100 text-sm font-medium uppercase tracking-wider">Venue Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">4.9/5</div>
              <div className="text-primary-100 text-sm font-medium uppercase tracking-wider">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Spaces Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Spaces Near You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover top-rated workspaces in Accra and beyond selected by our community. Book instantly and get to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/listings">
              <Button variant="outline" size="lg" className="px-8">View All Listings</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professionals Choose DeskVille</h2>
                    <div className="space-y-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Flexible Booking</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Need a desk for an hour, a day, or a month? We've got you covered with flexible terms and no lock-in contracts.
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Verified Quality</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Every space is vetted for high-speed internet, comfort, and essential amenities to ensure your productivity.
                                </p>
                            </div>
                        </div>

                         <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Seamless Payments</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    Book and pay securely with Mobile Money or Card. Receive instant confirmations and automated receipts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <img className="rounded-2xl shadow-xl transform md:rotate-3 hover:rotate-0 transition duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team collaborating" />
                </div>
            </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{Category.Coworking}</h3>
              <p className="text-gray-600 mb-6">Connect with others in vibrant shared workspaces. Perfect for freelancers and remote teams.</p>
              <Link to={`/listings?category=${Category.Coworking}`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700">
                  Find a Desk <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{Category.StudyHub}</h3>
              <p className="text-gray-600 mb-6">Quiet, distraction-free zones designed for deep work, reading, and exam preparation.</p>
              <Link to={`/listings?category=${Category.StudyHub}`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700">
                  Find Quiet Space <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{Category.EventVenue}</h3>
              <p className="text-gray-600 mb-6">Professional spaces for workshops, seminars, and corporate events.</p>
              <Link to={`/listings?category=${Category.EventVenue}`} className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700">
                  Find Venues <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform how you work?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of students, freelancers, and teams in Ghana who found their productive paradise on DeskVille.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/listings">
                    <Button size="lg" className="px-8 py-4 h-auto text-lg w-full sm:w-auto">Start Booking Now</Button>
                </Link>
                <Link to="/register">
                    <Button variant="outline" size="lg" className="px-8 py-4 h-auto text-lg w-full sm:w-auto border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">Create Account</Button>
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};