export type Role = 'user' | 'provider' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export enum Category {
  Coworking = 'Coworking Space',
  StudyHub = 'Study Hub',
  EventVenue = 'Event Venue',
}

export enum Amenity {
  WiFi = 'High-speed WiFi',
  AC = 'AC',
  Power = 'Backup power',
  Print = 'Printing/Scanning',
  Coffee = 'Refreshments/Coffee',
  Parking = 'Parking space',
  Projector = 'Projector/TV Screen',
  Quiet = 'Silent/Focus Room',
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory: string; // e.g., "Private Office"
  price: number;
  pricingModel: 'Hourly' | 'Daily' | 'Monthly';
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  amenities: Amenity[];
  providerId: string;
}

export interface Booking {
  id: string;
  listingId: string;
  listingTitle: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export interface AnalyticsData {
  name: string;
  value: number;
}