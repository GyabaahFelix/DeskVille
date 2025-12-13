import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useToastStore } from '../../store/useToastStore';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export const UserProfile = () => {
    const { user, login } = useAuthStore();
    const { addToast } = useToastStore();
    const [loading, setLoading] = useState(false);
    
    // Mock state for form
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (user) {
                // Update local store
                const updatedUser = { ...user, name, email };
                login(updatedUser);
                addToast('success', 'Profile updated successfully!');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm text-gray-500">Update your personal details and contact info.</p>
                </div>
                
                <form onSubmit={handleSave} className="p-6 space-y-6">
                    <div className="flex items-center space-x-6">
                        <div className="shrink-0">
                            {user?.avatar ? (
                                <img className="h-20 w-20 object-cover rounded-full" src={user.avatar} alt={user.name} />
                            ) : (
                                <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-2xl font-bold">
                                    {user?.name.charAt(0)}
                                </div>
                            )}
                        </div>
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-primary-50 file:text-primary-700
                                hover:file:bg-primary-100
                            "/>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <Input 
                            label="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            label="Email Address" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" isLoading={loading}>Save Changes</Button>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-8">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-gray-900">Security</h2>
                    <p className="mt-1 text-sm text-gray-500">Change your password.</p>
                </div>
                <div className="p-6 space-y-4">
                     <Input label="Current Password" type="password" />
                     <Input label="New Password" type="password" />
                     <div className="flex justify-end">
                        <Button variant="outline">Update Password</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};