import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      toggleFavorite: (id) => set((state) => {
        const exists = state.favoriteIds.includes(id);
        return {
          favoriteIds: exists 
            ? state.favoriteIds.filter(fid => fid !== id)
            : [...state.favoriteIds, id]
        };
      }),
      isFavorite: (id) => get().favoriteIds.includes(id),
    }),
    {
      name: 'deskville-favorites',
    }
  )
);