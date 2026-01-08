import { useEffect, useState } from 'react';

import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import getCharacters, { classNames } from '@/shared/helpers';
import type { Character } from '@/types';
import { CharactersCard } from '@/widgets';
import { FilterPanel } from '@/widgets/FilterPanel/FilterPanel';

import styles from './CharactersList.module.scss';

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await getCharacters.get('/character');
        setCharacters(response.data.results);
      } catch {
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Layout>
      <section className={classNames('container', {}, [styles.charactersList])}>
        <img
          className={styles.logo}
          src={LargeLogo}
          alt='Logo Rick and Morty'
        />
        <FilterPanel />
        {loading ? (
          <Loader
            size='large'
            title='Loading characters...'
          />
        ) : (
          <div className={styles.grid}>
            {characters.length > 0 ? (
              characters.map((character: Character) => (
                <CharactersCard
                  key={character.id}
                  character={character}
                />
              ))
            ) : (
              <p className={styles.empty}>No characters found</p>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};
