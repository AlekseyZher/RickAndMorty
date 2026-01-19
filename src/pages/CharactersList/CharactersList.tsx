import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import { classNames, useCharacters } from '@/shared/helpers';
import type { Character } from '@/types';
import { CharactersCard } from '@/widgets';
import { FilterPanel } from '@/widgets';

import styles from './CharactersList.module.scss';

export const CharactersList = () => {
  const {
    characters,
    loading,
    filters: { name, species, status, gender },
    filterActions: { setName, setSpecies, setStatus, setGender }
  } = useCharacters();

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
