import { ArrowBackIcon } from '@/assets';
import { Layout, Loader } from '@/shared/components';
import { classNames } from '@/shared/helpers';

import styles from './Character.module.scss';

export const Character = () => {
  return (
    <Layout>
      <section className={classNames('container', {}, [styles.character])}>
        <button className={styles.backButton}>
          <ArrowBackIcon />
          GO BACK
        </button>
        <Loader
          size='large'
          title='Loading character card...'
        />
      </section>
    </Layout>
  );
};
