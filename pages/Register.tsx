import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useToastStore } from '../store/useToastStore';
import { authService } from '../services/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Logo } from '../components/Logo';
import { Role } from '../types';

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user' as Role
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuthStore();
    const { addToast } = useToastStore();
    
    // Check for role query param (e.g. ?role=provider)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const roleParam = params.get('role');
        if (roleParam === 'provider') {
            setFormData(prev => ({ ...prev, role: 'provider' }));
        }
    }, [location.search]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Register logic
            const newUser = await authService.register({
                name: formData.name,
                email: formData.email,
                role: formData.role
            });
            
            // Auto login after register
            login(newUser);
            addToast('success', `Welcome to DeskVille, ${newUser.name}!`);
            
            if(newUser.role === 'provider') navigate('/provider/dashboard');
            else navigate('/dashboard/bookings');
            
        } catch (err) {
            addToast('error', 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                <Logo size="lg" showTagline />
                <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">
                    {formData.role === 'provider' ? 'Become a Partner' : 'Create your account'}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Join DeskVille to {formData.role === 'provider' ? 'list your space' : 'start booking'}.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    
                    {/* Role Toggles */}
                    <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, role: 'user'})}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'user' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            I want to Book
                        </button>
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, role: 'provider'})}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${formData.role === 'provider' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            I want to Host
                        </button>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input 
                            label="Full Name"
                            type="text" 
                            required 
                            placeholder="Kwame Mensah"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />

                        <Input 
                            label="Email address"
                            type="email" 
                            required 
                            placeholder="kwame@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        
                        <Input 
                            label="Password"
                            type="password" 
                            required 
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-500">Terms</Link> and <Link to="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</Link>
                            </label>
                        </div>

                        <Button type="submit" className="w-full" isLoading={isLoading}>
                            {formData.role === 'provider' ? 'Get Started' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                                Sign in instead
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};