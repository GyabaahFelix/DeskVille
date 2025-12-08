import { Listing, Category, Amenity, Booking, User } from '../types';

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Kwame Mensah', email: 'john@user.com', role: 'user', avatar: 'https://i.pravatar.cc/150?u=u1' },
  { id: 'p1', name: 'Hub Spaces Ghana', email: 'manager@provider.com', role: 'provider', avatar: 'https://i.pravatar.cc/150?u=p1' },
  { id: 'a1', name: 'Admin User', email: 'admin@deskville.com', role: 'admin' },
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Osu Creative Hub',
    description: 'A vibrant open shared workspace located in the heart of Osu. Perfect for freelancers and startups.',
    category: Category.Coworking,
    subCategory: 'Open Shared Workspace',
    price: 25,
    pricingModel: 'Hourly',
    location: 'Osu, Accra',
    image: 'https://picsum.photos/800/600?random=1',
    rating: 4.8,
    reviewCount: 120,
    amenities: [Amenity.WiFi, Amenity.Coffee, Amenity.Print, Amenity.AC],
    providerId: 'p1'
  },
  {
    id: '2',
    title: 'Legon Study Zone',
    description: 'A noise-free environment strictly for deep work and exam preparation near the university.',
    category: Category.StudyHub,
    subCategory: 'Silent study spaces',
    price: 15,
    pricingModel: 'Hourly',
    location: 'East Legon, Accra',
    image: 'https://picsum.photos/800/600?random=2',
    rating: 4.5,
    reviewCount: 45,
    amenities: [Amenity.WiFi, Amenity.Quiet, Amenity.Power],
    providerId: 'p1'
  },
  {
    id: '3',
    title: 'Airport City Conference Hall',
    description: 'Premium event space for corporate meetings and seminars. Seats up to 50 people.',
    category: Category.EventVenue,
    subCategory: 'Conference rooms',
    price: 2500,
    pricingModel: 'Daily',
    location: 'Airport City, Accra',
    image: 'https://picsum.photos/800/600?random=3',
    rating: 4.9,
    reviewCount: 12,
    amenities: [Amenity.Projector, Amenity.WiFi, Amenity.Parking, Amenity.AC],
    providerId: 'p2'
  },
  {
    id: '4',
    title: 'Kumasi Tech Pod',
    description: 'Dedicated desks with private lockers and 24/7 access in the Garden City.',
    category: Category.Coworking,
    subCategory: 'Dedicated Desk',
    price: 1200,
    pricingModel: 'Monthly',
    location: 'Adum, Kumasi',
    image: 'https://picsum.photos/800/600?random=4',
    rating: 4.7,
    reviewCount: 89,
    amenities: [Amenity.WiFi, Amenity.Coffee, Amenity.AC, Amenity.Power],
    providerId: 'p1'
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    listingId: '1',
    listingTitle: 'Osu Creative Hub',
    userId: 'u1',
    date: '2023-11-15',
    startTime: '09:00',
    endTime: '13:00',
    totalPrice: 100,
    status: 'completed'
  },
  {
    id: 'b2',
    listingId: '2',
    listingTitle: 'Legon Study Zone',
    userId: 'u1',
    date: '2023-11-20',
    startTime: '10:00',
    endTime: '12:00',
    totalPrice: 30,
    status: 'confirmed'
  }
];