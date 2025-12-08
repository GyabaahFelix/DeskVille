import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8 text-center">About DeskVille</h1>
        
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="mb-6">
            DeskVille is Ghana's premier digital marketplace for discovering and booking physical workspaces. We believe that where you work matters, and that finding a productive environment shouldn't be a hassle.
          </p>
          <p className="mb-6">
            Founded in 2024, our mission is to digitize access to co-working spaces, study hubs, and event venues across Africa. Whether you are a student looking for a quiet corner to study, a freelancer needing a desk for a day, or a startup looking for a monthly office, DeskVille connects you to the right space.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Vision</h2>
          <p className="mb-6">
            To create a world where anyone can work productively from anywhere, empowering the remote workforce and supporting local businesses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">For Providers</h2>
          <p className="mb-6">
            We help venue owners maximize their occupancy by connecting them with a vast network of professionals and students. Our platform handles bookings, payments, and visibility, allowing you to focus on providing a great experience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};