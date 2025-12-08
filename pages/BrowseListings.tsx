import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ListingCard } from '../components/ListingCard';
import { Input } from '../components/ui/Input';
import { listingService } from '../services/api';
import { Listing, Category } from '../types';
import { useLocation } from 'react-router-dom';

export const BrowseListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCat = queryParams.get('category');

  useEffect(() => {
    if(initialCat) setSelectedCategory(initialCat);
  }, [initialCat]);

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const data = await listingService.getAll();
        setListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  const filteredListings = listings.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          l.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || l.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-5 rounded-lg shadow-sm sticky top-24">
              <h2 className="font-bold text-gray-900 mb-4">Filters</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'All'}
                      onChange={() => setSelectedCategory('All')}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">All Spaces</span>
                  </label>
                  {Object.values(Category).map(cat => (
                    <label key={cat} className="flex items-center">
                      <input 
                        type="radio" 
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                 <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                 <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" />
                 <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₵0</span>
                    <span>₵500+</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <Input 
                placeholder="Search by name or location..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-white rounded-xl h-80 shadow-sm animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No listings found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};