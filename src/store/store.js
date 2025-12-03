import { create } from 'zustand';
import { countriesApi } from '../services/countriesApi';

export const useCharactersStore = create((set) => ({
  characters: [],
  isLoading: false,
  error: null,

  fetchCharacters: async () => {
    set({ isLoading: true, error: null });

    try {
      const data = await countriesApi.getCharacters();
      set({
        characters: data,
        isLoading: false,
      });
    } catch (err) {
      console.error('ERROR FETCH =>', err);
      set({
        error: err.message || 'Error al cargar personajes',
        isLoading: false,
      });
    }
  },
}));
