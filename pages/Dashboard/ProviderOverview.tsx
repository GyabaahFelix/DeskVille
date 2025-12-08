import React, { useEffect, useState } from 'react';
import { bookingService } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const ProviderOverview = () => {
    const { user } = useAuthStore();
    const [stats, setStats] = useState({ revenue: 0, bookings: 0, rating: 0 });
    
    // Mock chart data
    const chartData = [
        { name: 'Mon', bookings: 4 },
        { name: 'Tue', bookings: 3 },
        { name: 'Wed', bookings: 7 },
        { name: 'Thu', bookings: 5 },
        { name: 'Fri', bookings: 8 },
        { name: 'Sat', bookings: 2 },
        { name: 'Sun', bookings: 1 },
    ];

    useEffect(() => {
        if(user) {
            bookingService.getProviderStats(user.id).then(setStats);
        }
    }, [user]);

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">₵{stats.revenue}</p>
                    <span className="text-xs text-green-600 font-medium">+12% from last month</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.bookings}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium">Average Rating</p>
                    <div className="flex items-center mt-2">
                        <span className="text-3xl font-bold text-gray-900">{stats.rating}</span>
                        <svg className="w-5 h-5 text-yellow-400 ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Booking Activity</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="bookings" fill="#f97316" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};