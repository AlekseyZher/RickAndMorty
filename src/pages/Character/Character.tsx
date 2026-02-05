import { Link, useParams } from 'react-router-dom';

import { ArrowBackIcon } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import { classNames, useCharacterById } from '@/shared/helpers';

import styles from './Character.module.scss';

export const Character = () => {
  const { id } = useParams();
  const numberId = id ? Number(id) : null;
  const { character, loading, error } = useCharacterById(numberId);

  if (loading) {
    return (
      <Layout>
        <section className={classNames('container', [styles.character])}>
          <Link
            to='/'
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
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <section className={classNames('container', [styles.character])}>
          <Link
            to='/'
            className={styles.backButton}
          >
            <ArrowBackIcon />
            GO BACK
          </Link>
          <p>Character not found.</p>
        </section>
      </Layout>
    );
  }

  if (!character) {
    return (
      <Layout>
        <section className={classNames('container', [styles.character])}>
          <Link
            to='/'
            className={styles.backButton}
          >
            <ArrowBackIcon />
            GO BACK
          </Link>
          <p>Character not found.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className={classNames('container', [styles.character])}>
        <Link
          to='/'
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
              <span className={styles.value}>
                {character.type === '' ? 'Unknown' : character.type}
              </span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>{character.location.name}</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
