import { MOCK_LISTINGS, MOCK_USERS, MOCK_BOOKINGS } from './mockData';
import { Listing, User, Booking } from '../types';

// Utility to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const listingService = {
  getAll: async (): Promise<Listing[]> => {
    await delay(500);
    return [...MOCK_LISTINGS];
  },
  getById: async (id: string): Promise<Listing | undefined> => {
    await delay(300);
    return MOCK_LISTINGS.find(l => l.id === id);
  },
  create: async (listing: Listing): Promise<Listing> => {
    await delay(800);
    MOCK_LISTINGS.push(listing);
    return listing;
  }
};

export const authService = {
  login: async (email: string): Promise<User> => {
    await delay(600);
    const user = MOCK_USERS.find(u => u.email === email);
    if (!user) throw new Error('User not found');
    return user;
  },
  register: async (userData: Partial<User>): Promise<User> => {
    await delay(800);
    const newUser: User = {
        id: `u${Date.now()}`,
        email: userData.email!,
        name: userData.name!,
        role: userData.role || 'user',
        avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
    };
    MOCK_USERS.push(newUser);
    return newUser;
  }
};

export const bookingService = {
  getByUser: async (userId: string): Promise<Booking[]> => {
    await delay(400);
    return MOCK_BOOKINGS.filter(b => b.userId === userId);
  },
  create: async (booking: Booking): Promise<Booking> => {
    await delay(1000); // Simulate payment processing
    MOCK_BOOKINGS.push(booking);
    return booking;
  },
  getProviderStats: async (providerId: string) => {
    await delay(500);
    return {
        revenue: 1250,
        bookings: 45,
        rating: 4.8
    };
  }
};