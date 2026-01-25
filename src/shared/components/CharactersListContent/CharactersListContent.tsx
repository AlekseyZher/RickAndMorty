import { useEffect, useRef } from 'react';

import { Loader } from '@/shared/components';
import type { Character } from '@/types';
import { CharactersCard } from '@/widgets';

import styles from './CharactersListContent.module.scss';

interface CharactersListContentProps {
  characters: Character[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export const CharactersListContent = (props: CharactersListContentProps) => {
  const { characters, loading, loadingMore, hasMore, onLoadMore } = props;
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          onLoadMore();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, loadingMore, onLoadMore]);

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

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {characters.map((character) => (
          <CharactersCard
            key={character.id}
            character={character}
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
