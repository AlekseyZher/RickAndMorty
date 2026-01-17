import type { Character } from '@/types';

import apiClient from './apiClient';

interface CharacterFilters {
  name?: string;
  species?: string;
  gender?: string;
  status?: string;
}

type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export const getCharacters = async (
  filters: CharacterFilters,
  signal?: AbortSignal
): Promise<CharacterResponse> => {
  const response = await apiClient.get<CharacterResponse>('/character', {
    params: filters,
    signal
  });
  return response.data;
};
