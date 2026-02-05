import { LargeLogo } from '@/assets';
import { CharactersListContent, Layout } from '@/shared/components';
import { classNames, useCharacters } from '@/shared/helpers';
import { FilterPanel } from '@/widgets';

import styles from './CharactersList.module.scss';

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
    <Layout>
      <section className={classNames('container', [styles.charactersList])}>
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
        <CharactersListContent
          characters={characters}
          loading={loading}
          loadingMore={loadingMore}
          hasMore={hasMore}
          onLoadMore={loadMore}
          onUpdateCharacter={updateCharacter}
        />
      </section>
    </Layout>
  );
};
