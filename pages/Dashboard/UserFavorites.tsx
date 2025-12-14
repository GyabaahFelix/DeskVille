import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listingService } from '../../services/api';
import { Listing } from '../../types';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { ListingCard } from '../../components/ListingCard';
import { Button } from '../../components/ui/Button';

export const UserFavorites = () => {
    const { favoriteIds } = useFavoritesStore();
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            setLoading(true);
            try {
                // In a real app, you might have an endpoint for getByIds, 
                // here we fetch all and filter client-side for the mock
                const allListings = await listingService.getAll();
                const favs = allListings.filter(l => favoriteIds.includes(l.id));
                setListings(favs);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchFavorites();
    }, [favoriteIds]);

    if (loading) return <div>Loading favorites...</div>;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Saved Spaces</h1>
                <p className="text-gray-500 mt-1">Listings you have marked as favorites.</p>
            </div>

            {listings.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No favorites yet</h3>
                    <p className="mt-1 text-gray-500 mb-6">Start browsing and save spaces you like!</p>
                    <Link to="/listings">
                        <Button>Browse Spaces</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map(listing => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))}
                </div>
            )}
        </div>
    );
};