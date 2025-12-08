import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { Logo } from './Logo';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
             <Logo size="sm" />
          </div>

          {/* Middle: Search Pill (Airbnb Style) */}
          <div 
            className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition cursor-pointer py-2.5 px-4 lg:px-6 gap-2 lg:gap-4 divide-x divide-gray-300 bg-white"
            onClick={() => navigate('/listings')}
          >
            <div className="text-sm font-semibold text-gray-900 px-2 lg:px-4 truncate">Anywhere</div>
            <div className="text-sm font-semibold text-gray-900 px-2 lg:px-4 truncate">Any week</div>
            <div className="text-sm text-gray-500 px-2 lg:px-4 flex items-center gap-2 truncate">
              <span>Add guests</span>
              <div className="bg-primary-500 rounded-full p-2 text-white -mr-2 lg:-mr-4">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>
          </div>

          {/* Right: User Menu */}
          <div className="flex items-center gap-2">
            
            {/* List Your Space Link */}
            <Link 
                to="/register?role=provider" 
                className="hidden md:block text-sm font-semibold text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
            >
                List your space
            </Link>

            {/* Globe Icon */}
            <div className="hidden md:flex items-center justify-center h-10 w-10 hover:bg-gray-100 rounded-full cursor-pointer transition">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            </div>

            {/* User Dropdown Pill */}
            <div className="relative" ref={menuRef}>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md transition bg-white ml-1"
                >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {isAuthenticated && user?.avatar ? (
                         <img src={user.avatar} alt="User" className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                        <div className="h-8 w-8 bg-gray-500 rounded-full text-white flex items-center justify-center overflow-hidden">
                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        </div>
                    )}
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 transform origin-top-right transition-all">
                        {isAuthenticated ? (
                            <>
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                </div>
                                <div className="py-2">
                                    {user?.role === 'user' && (
                                        <Link to="/dashboard/bookings" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium">My Bookings</Link>
                                    )}
                                    {user?.role === 'provider' && (
                                        <Link to="/provider/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium">Provider Dashboard</Link>
                                    )}
                                    {user?.role === 'admin' && (
                                        <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium">Admin Dashboard</Link>
                                    )}
                                    <Link to="/listings" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Browse Spaces</Link>
                                </div>
                                <div className="border-t border-gray-100 py-2">
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Log out</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="py-2">
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">Log in</Link>
                                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign up</Link>
                                </div>
                                <div className="border-t border-gray-100 py-2">
                                    <Link to="/register?role=provider" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">List your space</Link>
                                    <Link to="/help" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Help Center</Link>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};