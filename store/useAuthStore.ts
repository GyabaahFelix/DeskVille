import { create } from 'zustand';
import { AuthState, User } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user: User) => {
    localStorage.setItem('deskville_user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('deskville_user');
    set({ user: null, isAuthenticated: false });
  },
}));

// Initialize store from local storage if available
const storedUser = localStorage.getItem('deskville_user');
if (storedUser) {
  try {
    const parsed = JSON.parse(storedUser);
    useAuthStore.getState().login(parsed);
  } catch (e) {
    console.error("Failed to parse stored user", e);
  }
}