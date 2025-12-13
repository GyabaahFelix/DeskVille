import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { BrowseListings } from './pages/BrowseListings';
import { ListingDetails } from './pages/ListingDetails';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { DashboardLayout } from './pages/Dashboard/DashboardLayout';
import { UserBookings } from './pages/Dashboard/UserBookings';
import { UserFavorites } from './pages/Dashboard/UserFavorites';
import { UserProfile } from './pages/Dashboard/UserProfile';
import { ProviderOverview } from './pages/Dashboard/ProviderOverview';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Help } from './pages/Help';
import { Contact } from './pages/Contact';
import { Safety } from './pages/Safety';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { ToastContainer } from './components/ui/ToastContainer';

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listings" element={<BrowseListings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        
        {/* Footer Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* User Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
           <Route path="" element={<Navigate to="bookings" replace />} />
           <Route path="bookings" element={<UserBookings />} />
           <Route path="favorites" element={<UserFavorites />} />
           <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Provider Dashboard */}
        <Route path="/provider" element={<DashboardLayout />}>
           <Route path="" element={<Navigate to="dashboard" replace />} />
           <Route path="dashboard" element={<ProviderOverview />} />
           {/* Add Manage Listings, Calendar placeholders here */}
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
            <Route path="dashboard" element={<div className="p-6">Admin Dashboard Placeholder</div>} />
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;