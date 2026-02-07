import type { Character } from '@/types';

import apiClient from './apiClient';

export const getCharacterById = async (
  id: number | null,
  signal?: AbortSignal
): Promise<Character> => {
  const response = await apiClient.get<Character>(`/character/${id}`, {
    signal
  });
  return response.data;
};
