import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { authService } from '../services/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Logo } from '../components/Logo';

export const Login = () => {
    const [email, setEmail] = useState('john@user.com'); // Pre-fill for demo
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const location = useLocation();
    
    // @ts-ignore
    const from = location.state?.from || '/';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const user = await authService.login(email);
            login(user);
            if(user.role === 'provider') navigate('/provider/dashboard');
            else if (user.role === 'admin') navigate('/admin/dashboard');
            else navigate(from);
        } catch (err) {
            setError('Invalid credentials or user not found');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                <Logo size="lg" showTagline />
                <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Use <span className="font-mono text-gray-500">john@user.com</span> or <span className="font-mono text-gray-500">manager@provider.com</span>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input 
                            label="Email address"
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <Input 
                            label="Password"
                            type="password" 
                            defaultValue="password"
                            required 
                        />

                        {error && <div className="text-red-500 text-sm">{error}</div>}

                        <Button type="submit" className="w-full" isLoading={isLoading}>Sign in</Button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
                                Create a new account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};