import React from 'react';
import { MOCK_LISTINGS } from '../../services/mockData';
import { ListingCard } from '../../components/ListingCard';

export const UserFavorites = () => {
    // In a real app, we would fetch saved IDs from the backend/store
    // For mock purposes, we'll just show the first 2 listings
    const savedListings = MOCK_LISTINGS.slice(0, 2);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Saved Spaces</h1>
                <p className="text-gray-500 mt-1">Listings you have marked as favorites.</p>
            </div>

            {savedListings.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900">No favorites yet</h3>
                    <p className="mt-1 text-sm text-gray-500">Start browsing and save spaces you like!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedListings.map(listing => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            )}
        </div>
    );
};