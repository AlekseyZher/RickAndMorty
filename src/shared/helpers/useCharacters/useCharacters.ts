import { useEffect, useState, useCallback } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

import { getCharacters, useDebounce } from '@/shared/helpers';
import type { Character } from '@/types';

export const useCharacters = (
  initialFilters = {
    name: '',
    species: '',
    gender: '',
    status: ''
  }
) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const [name, setName] = useState(initialFilters.name);
  const [species, setSpecies] = useState(initialFilters.species);
  const [gender, setGender] = useState(initialFilters.gender);
  const [status, setStatus] = useState(initialFilters.status);

  const debouncedName = useDebounce(name, 500);

  const updateCharacter = useCallback(
    (id: number, updates: Partial<Character>) => {
      setCharacters((prev) =>
        prev.map((char) => (char.id === id ? { ...char, ...updates } : char))
      );
    },
    []
  );

  const reset = useCallback(() => {
    setCharacters([]);
    setPage(1);
    setHasMore(true);
    setTotal(0);
  }, []);

  useEffect(() => {
    reset();
  }, [debouncedName, species, gender, status, reset]);

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacters = async () => {
      if (page === 1) setLoading(true);

      try {
        const data = await getCharacters(
          {
            name: debouncedName,
            species: species,
            gender: gender,
            status: status,
            page
          },
          controller.signal
        );

        if (controller.signal.aborted) return;

        setTotal(data.info.count);
        setHasMore(page < data.info.pages);

        if (page === 1) {
          setCharacters(data.results);
        } else {
          setCharacters((prev) => [...prev, ...data.results]);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          if (page === 1) {
            setCharacters([]);
          }
          toast.error("Couldn't load characters", {
            duration: 4000,
            position: 'bottom-right'
          });
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadCharacters();

    return () => controller.abort();
  }, [debouncedName, species, gender, status, page]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  return {
    characters,
    loading,
    loadingMore: loading && characters.length > 0,
    hasMore,
    total,
    filters: { name, species, gender, status },
    filterActions: { setName, setSpecies, setGender, setStatus },
    loadMore,
    updateCharacter
  };
};
