import React, { useEffect, useState } from 'react';
import { bookingService } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import { Booking } from '../../types';

export const UserBookings = () => {
    const { user } = useAuthStore();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            bookingService.getByUser(user.id).then(data => {
                setBookings(data);
                setLoading(false);
            });
        }
    }, [user]);

    if (loading) return <div>Loading bookings...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
            
            {bookings.length === 0 ? (
                <div className="bg-white p-12 rounded-xl text-center shadow-sm">
                    <p className="text-gray-500">You haven't booked any spaces yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {bookings.map(booking => (
                        <div key={booking.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{booking.listingTitle}</h3>
                                <p className="text-sm text-gray-500">
                                    Date: <span className="font-medium text-gray-700">{booking.date}</span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Time: {booking.startTime} - {booking.endTime}
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize mb-2 ${
                                    booking.status === 'confirmed' || booking.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {booking.status}
                                </span>
                                <p className="font-bold text-gray-900">₵{booking.totalPrice}</p>
                                <button className="text-primary-600 text-sm hover:underline mt-1">Download Receipt</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};