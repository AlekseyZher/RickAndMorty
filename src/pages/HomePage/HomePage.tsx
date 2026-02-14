import { LargeLogo } from '@/assets';
import { CharactersListContent } from '@/shared/components';
import { classNames } from '@/shared/helpers';
import { useCharacters } from '@/shared/hooks';
import { FilterPanel } from '@/widgets';

import styles from './HomePage.module.scss';

export const CharactersList = () => {
  const {
    characters,
    loading,
    loadingMore,
    hasMore,
    filters: { name, species, status, gender },
    filterActions: { setName, setSpecies, setStatus, setGender },
    loadMore,
    updateCharacter
  } = useCharacters();

  return (
    <section className={classNames('container', styles.charactersList)}>
      <img
        className={styles.logo}
        src={LargeLogo}
        alt='Logo Rick and Morty'
      />
      <FilterPanel
        gender={gender}
        status={status}
        name={name}
        species={species}
        onGenderChange={setGender}
        onStatusChange={setStatus}
        onNameChange={setName}
        onSpeciesChange={setSpecies}
      />
      <CharactersListContent
        characters={characters}
        loading={loading}
        loadingMore={loadingMore}
        hasMore={hasMore}
        onLoadMore={loadMore}
        onUpdateCharacter={updateCharacter}
      />
    </section>
  );
};
