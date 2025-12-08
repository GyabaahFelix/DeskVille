import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-8">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="First Name" placeholder="Jane" />
                    <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email" type="email" placeholder="jane@example.com" />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
            </form>
        </div>

        <div className="mt-12 text-center text-gray-500">
            <p className="mb-2"><strong>Email:</strong> support@deskville.com</p>
            <p className="mb-2"><strong>Phone:</strong> +233 50 000 0000</p>
            <p><strong>Address:</strong> 123 Independence Ave, Accra, Ghana</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};