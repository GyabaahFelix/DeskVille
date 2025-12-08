import React from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Navbar } from '../../components/Navbar';

export const DashboardLayout = () => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const isProvider = user?.role === 'provider';

  const userLinks = [
    { name: 'My Bookings', path: '/dashboard/bookings' },
    { name: 'Favorites', path: '/dashboard/favorites' },
    { name: 'Profile', path: '/dashboard/profile' },
  ];

  const providerLinks = [
    { name: 'Overview', path: '/provider/dashboard' },
    { name: 'Manage Listings', path: '/provider/listings' },
    { name: 'Calendar', path: '/provider/calendar' },
  ];

  const links = isProvider ? providerLinks : userLinks;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden md:block mr-8">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
                <div className="flex items-center space-x-3 mb-6 p-2">
                     <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
                        {user?.name.charAt(0)}
                     </div>
                     <div>
                         <p className="font-medium text-gray-900">{user?.name}</p>
                         <p className="text-xs text-gray-500 capitalize">{user?.role} Account</p>
                     </div>
                </div>
                <nav className="space-y-1">
                    {links.map(link => (
                        <Link 
                            key={link.path}
                            to={link.path}
                            className={`block px-3 py-2 rounded-md text-sm font-medium ${location.pathname === link.path ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
        
        {/* Content */}
        <main className="flex-1">
            <Outlet />
        </main>
      </div>
    </div>
  );
};