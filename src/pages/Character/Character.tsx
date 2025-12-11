import { ArrowBackIcon } from '@/assets';
import { Layout, Loader } from '@/shared/components';

import classes from './Character.module.scss';

export const Character = () => {
  return (
    <Layout>
      <section className={`container ${classes.character}`}>
        <button className={classes.backButton}>
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
