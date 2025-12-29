import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import { classNames } from '@/shared/helpers';

import styles from './CharactersList.module.scss';

export const CharactersList = () => {
  return (
    <Layout>
      <section className={classNames('container', {}, [styles.charactersList])}>
        <img
          className={styles.logo}
          src={LargeLogo}
          alt='Logo Rick and Morty'
        />
        <Loader
          size='large'
          title='Loading characters...'
        />
      </section>
    </Layout>
  );
};
