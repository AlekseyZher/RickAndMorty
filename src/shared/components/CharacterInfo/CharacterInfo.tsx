import type { Character } from '@/types';

import styles from './CharacterInfo.module.scss';

type CharacterInfoProps = {
  character: Character;
};

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{character.name}</h1>
      <h2 className={styles.subtitle}>Information</h2>

      <div className={styles.row}>
        <span className={styles.label}>Gender:</span>
        <span className={styles.value}>{character.gender}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Status:</span>
        <span className={styles.value}>{character.status}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Species:</span>
        <span className={styles.value}>{character.species}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Origin:</span>
        <span className={styles.value}>{character.origin.name}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Type:</span>
        <span className={styles.value}>{character.type || 'Unknown'}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Location:</span>
        <span className={styles.value}>{character.location.name}</span>
      </div>
    </div>
  );
};
