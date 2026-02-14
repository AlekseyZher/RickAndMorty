import { useRef } from 'react';

import { Loader } from '@/shared/components';
import { useIntersectionObserver } from '@/shared/hooks';
import type { Character } from '@/types';
import { CharactersCard } from '@/widgets';

import styles from './CharactersListContent.module.scss';

interface CharactersListContentProps {
  characters: Character[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  onUpdateCharacter?: (id: number, updates: Partial<Character>) => void;
}

export const CharactersListContent = (props: CharactersListContentProps) => {
  const {
    characters,
    loading,
    loadingMore,
    hasMore,
    onLoadMore,
    onUpdateCharacter
  } = props;

  const loaderRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(loaderRef, {
    onIntersect: onLoadMore,
    enabled: hasMore && !loadingMore,
    threshold: 0.1
  });

  if (loading && characters.length === 0) {
    return (
      <div className={styles.center}>
        <Loader
          size='large'
          title='Loading characters...'
        />
      </div>
    );
  }

  if (!loading && characters.length === 0) {
    return (
      <div className={styles.center}>
        <p>Characters list is empty...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {characters.map((character) => (
          <CharactersCard
            key={character.id}
            character={character}
            onUpdate={(updates) => onUpdateCharacter?.(character.id, updates)}
          />
        ))}
      </div>

      {hasMore && (
        <div
          ref={loaderRef}
          className={styles.loader}
        >
          <Loader size='small' />
        </div>
      )}

      {!hasMore && characters.length > 0 && (
        <p className={styles.end}>You've reached the end of the list.</p>
      )}
    </div>
  );
};
