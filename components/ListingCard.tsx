import React from 'react';
import { Link } from 'react-router-dom';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link to={`/listings/${listing.id}`} className="group block bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 uppercase tracking-wide">
          {listing.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
            <div>
                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 truncate">{listing.title}</h3>
                 <p className="text-sm text-gray-500">{listing.location}</p>
            </div>
        </div>
        
        <div className="flex items-center mb-3">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-900">{listing.rating}</span>
            <span className="mx-1 text-gray-300">·</span>
            <span className="text-sm text-gray-500">{listing.reviewCount} reviews</span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
             <div className="flex flex-wrap gap-1">
                {listing.amenities.slice(0,2).map((a, i) => (
                    <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">{a.split(' ')[0]}</span>
                ))}
                {listing.amenities.length > 2 && <span className="text-[10px] text-gray-400 px-1.5 py-0.5">+{listing.amenities.length - 2}</span>}
             </div>
            <div className="text-right">
                <span className="block text-lg font-bold text-primary-600">₵{listing.price}</span>
                <span className="text-xs text-gray-500">per {listing.pricingModel.toLowerCase().replace('ly', '')}</span>
            </div>
        </div>
      </div>
    </Link>
  );
};