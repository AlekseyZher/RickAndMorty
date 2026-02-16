import { useEffect, useState } from 'react';

import axios from 'axios';

import { getCharacterById } from '@/api';
import type { Character } from '@/types';

interface UseCharacterByIdResult {
  character: Character | null;
  loading: boolean;
  error: string | null;
}

export const useCharacterById = (id: number | null): UseCharacterByIdResult => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacter = async () => {
      setLoading(true);
      setError(null);
      setCharacter(null);

      try {
        const data = await getCharacterById(id, controller.signal);
        if (!controller.signal.aborted) {
          setCharacter(data);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          if (axios.isAxiosError(err)) {
            const status = err.response?.status;
            if (status === 404) {
              setError('Character not found');
            } else {
              setError(err.message || 'Failed to load character');
            }
          } else {
            setError('An unknown error occurred');
          }
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadCharacter();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { character, loading, error };
};
