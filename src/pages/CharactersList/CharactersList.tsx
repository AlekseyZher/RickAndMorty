import { useEffect, useState } from 'react';

import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import { classNames, useDebounce } from '@/shared/helpers';
import { getCharacters } from '@/shared/helpers/getCharacters/getCharacters';
import type { Character } from '@/types';
import { CharactersCard } from '@/widgets';
import { FilterPanel } from '@/widgets';

import styles from './CharactersList.module.scss';

export const CharactersList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

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
        if (error instanceof Error && error.name !== 'AbortError') {
          setCharacters([]);
          setLoading(false);
          console.error('Error:', error);
        }
      }
    };

    loadCharacters();

    return () => controller.abort();
  }, [debouncedName, species, gender, status]);

  return (
    <Layout>
      <section className={classNames('container', {}, [styles.charactersList])}>
        <img
          className={styles.logo}
          src={LargeLogo}
          alt='Logo Rick and Morty'
        />
        <FilterPanel
          gender={gender}
          onGenderChange={setGender}
          status={status}
          onStatusChange={setStatus}
          name={name}
          onNameChange={setName}
          species={species}
          onSpeciesChange={setSpecies}
        />
        {loading ? (
          <Loader
            size='large'
            title='Loading characters...'
          />
        ) : characters.length > 0 ? (
          <div className={styles.grid}>
            {characters.map((character: Character) => (
              <CharactersCard
                key={character.id}
                character={character}
              />
            ))}
          </div>
        ) : (
          <h3 className={styles.empty}>Characters list is empty...</h3>
        )}
      </section>
    </Layout>
  );
};
