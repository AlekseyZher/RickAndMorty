import { useEffect, useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

import { useDebounce } from '@/shared/helpers';
import { getCharacters } from '@/shared/helpers/getCharacters/getCharacters';
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

  const [name, setName] = useState(initialFilters.name);
  const [species, setSpecies] = useState(initialFilters.species);
  const [gender, setGender] = useState(initialFilters.gender);
  const [status, setStatus] = useState(initialFilters.status);

  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    const controller = new AbortController();

    const loadCharacters = async () => {
      setLoading(true);
      try {
        const data = await getCharacters(
          {
            name: debouncedName || undefined,
            species: species || undefined,
            gender: gender || undefined,
            status: status || undefined
          },
          controller.signal
        );

        if (!controller.signal.aborted) {
          setCharacters(data.results);
          setLoading(false);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          setCharacters([]);
          setLoading(false);
          toast.error("Couldn't load the list of characters", {
            duration: 4000,
            position: 'bottom-right'
          });
        }
      }
    };

    loadCharacters();

    return () => controller.abort();
  }, [debouncedName, species, gender, status]);

  return {
    characters,
    loading,
    filters: {
      name,
      species,
      gender,
      status
    },
    filterActions: {
      setName,
      setSpecies,
      setGender,
      setStatus
    }
  };
};
