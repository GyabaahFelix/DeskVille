import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/ui/Button';
import { listingService, bookingService } from '../services/api';
import { useAuthStore } from '../store/useAuthStore';
import { Listing, Booking } from '../types';

export const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    if (id) {
      listingService.getById(id).then(data => {
        setListing(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  const handleBookClick = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/listings/${id}` } });
      return;
    }
    if(!bookingDate) {
        alert("Please select a date");
        return;
    }
    setShowPaymentModal(true);
  };

  const processPayment = async () => {
    if (!listing || !user) return;
    setIsBooking(true);
    try {
        const newBooking: Booking = {
            id: `b${Date.now()}`,
            listingId: listing.id,
            listingTitle: listing.title,
            userId: user.id,
            date: bookingDate,
            startTime: '09:00',
            endTime: '17:00',
            totalPrice: listing.price * 8, // Assuming 8 hours
            status: 'completed'
        };
        await bookingService.create(newBooking);
        alert('Booking successful!');
        navigate('/dashboard/bookings');
    } catch (e) {
        alert('Payment failed');
    } finally {
        setIsBooking(false);
        setShowPaymentModal(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!listing) return <div className="min-h-screen flex items-center justify-center">Listing not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
            <span className="cursor-pointer hover:underline" onClick={() => navigate('/listings')}>Listings</span> &gt; {listing.title}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <img src={listing.image} alt={listing.title} className="w-full h-96 object-cover" />
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
                            <p className="text-gray-500 mt-1 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                {listing.location}
                            </p>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-2xl font-bold text-primary-600">₵{listing.price}</span>
                            <span className="text-sm text-gray-400">/{listing.pricingModel}</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 py-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">About this space</h3>
                        <p className="text-gray-600 leading-relaxed">{listing.description}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {listing.amenities.map(amenity => (
                                <div key={amenity} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-sm">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Book this space</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                            <input 
                                type="date" 
                                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                min={new Date().toISOString().split('T')[0]}
                                onChange={(e) => setBookingDate(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 py-2 border-t border-b border-gray-100">
                            <span>Base Price</span>
                            <span>₵{listing.price} x 8 hrs (Approx)</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-gray-900">
                            <span>Total</span>
                            <span>₵{listing.price * 8}</span>
                        </div>
                        
                        <Button className="w-full" size="lg" onClick={handleBookClick}>Request to Book</Button>
                        <p className="text-xs text-center text-gray-400 mt-2">You won't be charged yet</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Mock Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                <h3 className="text-xl font-bold mb-4">Confirm Payment</h3>
                <p className="text-gray-600 mb-6">Pay <strong>₵{listing.price * 8}</strong> to secure your booking at {listing.title}.</p>
                
                <div className="space-y-3 mb-6">
                    <button className="w-full p-3 border border-gray-200 rounded-lg flex items-center hover:bg-gray-50">
                        <span className="font-semibold ml-2">📱 Mobile Money (MTN/Voda)</span>
                    </button>
                    <button className="w-full p-3 border border-gray-200 rounded-lg flex items-center hover:bg-gray-50">
                        <span className="font-semibold ml-2">💳 Credit Card</span>
                    </button>
                    <button className="w-full p-3 border border-gray-200 rounded-lg flex items-center hover:bg-gray-50">
                        <span className="font-semibold ml-2">👛 Hubtel / Zeepay</span>
                    </button>
                </div>

                <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1" onClick={() => setShowPaymentModal(false)}>Cancel</Button>
                    <Button className="flex-1" onClick={processPayment} isLoading={isBooking}>Pay & Book</Button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};