import { Link, useParams } from 'react-router-dom';

import { ArrowBackIcon } from '@/assets';
import { CharacterInfo, Loader } from '@/shared/components';
import { ROUTES } from '@/shared/constants/routes';
import { classNames } from '@/shared/helpers';
import { useCharacterById } from '@/shared/hooks';

import styles from './Character.module.scss';

export const Character = () => {
  const { id } = useParams();
  const numberId = id ? Number(id) : null;
  const { character, loading, error } = useCharacterById(numberId);

  if (loading) {
    return (
      <section className={classNames('container', styles.character)}>
        <Link
          to={ROUTES.HOME}
          className={styles.backButton}
        >
          <ArrowBackIcon />
          GO BACK
        </Link>
        <Loader
          size='large'
          title='Loading character card...'
        />
      </section>
    );
  }

  if (error || !character) {
    return (
      <section className={classNames('container', styles.character)}>
        <Link
          to={ROUTES.HOME}
          className={styles.backButton}
        >
          <ArrowBackIcon />
          GO BACK
        </Link>
        <p>Character not found.</p>
      </section>
    );
  }

  return (
    <section className={classNames('container', styles.character)}>
      <Link
        to={ROUTES.HOME}
        className={styles.backButton}
      >
        <ArrowBackIcon />
        GO BACK
      </Link>

      <div className={styles.card}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
        <CharacterInfo character={character} />
      </div>
    </section>
  );
};
