import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';

import classes from './CharactersList.module.scss';

export const CharactersList = () => {
  return (
    <Layout>
      <section className={`container ${classes.charactersList}`}>
        <img
          className={classes.logo}
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
