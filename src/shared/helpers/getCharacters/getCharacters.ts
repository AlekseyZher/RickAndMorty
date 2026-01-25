import type { Character } from '@/types';

import apiClient from './apiClient';

interface CharacterFilters {
  name?: string;
  species?: string;
  gender?: string;
  status?: string;
  page?: number;
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
  params: CharacterFilters,
  signal?: AbortSignal
): Promise<CharacterResponse> => {
  const response = await apiClient.get<CharacterResponse>('/character', {
    params,
    signal
  });
  return response.data;
};
