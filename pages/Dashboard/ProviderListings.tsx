import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listingService } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import { Listing } from '../../types';
import { Button } from '../../components/ui/Button';

export const ProviderListings = () => {
    const { user } = useAuthStore();
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyListings = async () => {
            if (!user) return;
            setLoading(true);
            try {
                // Filtering all listings by providerId for mock purposes
                const all = await listingService.getAll();
                // For this demo, we assume the logged in user is the provider for all listings if their ID matches 'p1' 
                // OR if they created it.
                const my = all.filter(l => l.providerId === user.id || (user.role === 'provider' && l.providerId === 'p1'));
                setListings(my);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMyListings();
    }, [user]);

    if (loading) return <div>Loading listings...</div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
                    <p className="text-gray-500 mt-1">Manage your properties and availability.</p>
                </div>
                <Link to="/provider/listings/new">
                    <Button>
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        Add New Space
                    </Button>
                </Link>
            </div>

            {listings.length === 0 ? (
                <div className="bg-white p-12 rounded-xl text-center shadow-sm border border-gray-200">
                    <p className="text-gray-500 mb-4">You haven't listed any spaces yet.</p>
                    <Link to="/provider/listings/new">
                        <Button variant="outline">Create your first listing</Button>
                    </Link>
                </div>
            ) : (
                <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {listings.map((listing) => (
                                    <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded object-cover" src={listing.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                                                    <div className="text-sm text-gray-500">{listing.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{listing.category}</div>
                                            <div className="text-xs text-gray-500">{listing.subCategory}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-semibold text-gray-900">₵{listing.price}</span>
                                            <span className="text-xs text-gray-500">/{listing.pricingModel}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-primary-600 hover:text-primary-900 mr-4">Edit</a>
                                            <a href="#" className="text-gray-400 hover:text-red-600">Delete</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};