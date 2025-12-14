import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listingService } from '../../services/api';
import { useAuthStore } from '../../store/useAuthStore';
import { useToastStore } from '../../store/useToastStore';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Category, Amenity, Listing } from '../../types';

export const ProviderCreateListing = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { addToast } = useToastStore();
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: Category.Coworking,
        subCategory: '',
        price: '',
        pricingModel: 'Hourly',
        location: '',
        image: 'https://picsum.photos/800/600', // Default placeholder
        amenities: [] as Amenity[]
    });

    const handleAmenityChange = (amenity: Amenity) => {
        setFormData(prev => {
            const exists = prev.amenities.includes(amenity);
            if (exists) return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
            return { ...prev, amenities: [...prev.amenities, amenity] };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        
        setIsLoading(true);
        try {
            const newListing: Listing = {
                id: `l${Date.now()}`,
                providerId: user.id,
                title: formData.title,
                description: formData.description,
                category: formData.category,
                subCategory: formData.subCategory || 'General',
                price: parseFloat(formData.price),
                pricingModel: formData.pricingModel as 'Hourly' | 'Daily' | 'Monthly',
                location: formData.location,
                image: formData.image,
                amenities: formData.amenities,
                rating: 0,
                reviewCount: 0
            };

            await listingService.create(newListing);
            addToast('success', 'Listing created successfully!');
            navigate('/provider/listings');
        } catch (err) {
            console.error(err);
            addToast('error', 'Failed to create listing');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">List a New Space</h1>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 space-y-6">
                
                {/* Basic Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">Basic Details</h3>
                    <Input 
                        label="Listing Title" 
                        placeholder="e.g. Modern Private Office in Osu" 
                        required 
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea 
                            rows={4} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Describe your space..."
                            required
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                        />
                    </div>
                </div>

                {/* Categories & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select 
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            value={formData.category}
                            onChange={e => setFormData({...formData, category: e.target.value as Category})}
                        >
                            {Object.values(Category).map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <Input 
                        label="Sub-Category (Optional)" 
                        placeholder="e.g. Hot Desk, Meeting Room" 
                        value={formData.subCategory}
                        onChange={e => setFormData({...formData, subCategory: e.target.value})}
                    />
                    <div className="md:col-span-2">
                         <Input 
                            label="Location / Address" 
                            placeholder="e.g. 123 Oxford Street, Accra" 
                            required
                            value={formData.location}
                            onChange={e => setFormData({...formData, location: e.target.value})}
                        />
                    </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">Pricing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                            label="Price (GHS)" 
                            type="number" 
                            min="0"
                            required
                            value={formData.price}
                            onChange={e => setFormData({...formData, price: e.target.value})}
                        />
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pricing Model</label>
                            <select 
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                value={formData.pricingModel}
                                onChange={e => setFormData({...formData, pricingModel: e.target.value})}
                            >
                                <option value="Hourly">Per Hour</option>
                                <option value="Daily">Per Day</option>
                                <option value="Monthly">Per Month</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {Object.values(Amenity).map(amenity => (
                            <label key={amenity} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                <input 
                                    type="checkbox" 
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                    checked={formData.amenities.includes(amenity)}
                                    onChange={() => handleAmenityChange(amenity)}
                                />
                                <span className="text-sm text-gray-700">{amenity}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">Photos</h3>
                    <Input 
                        label="Image URL" 
                        placeholder="https://..." 
                        value={formData.image}
                        onChange={e => setFormData({...formData, image: e.target.value})}
                    />
                    {formData.image && (
                        <div className="mt-2 h-48 w-full bg-gray-100 rounded-lg overflow-hidden">
                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>

                <div className="pt-6 flex items-center justify-end space-x-4 border-t border-gray-100">
                    <Button type="button" variant="outline" onClick={() => navigate('/provider/listings')}>Cancel</Button>
                    <Button type="submit" isLoading={isLoading}>Create Listing</Button>
                </div>

            </form>
        </div>
    );
};