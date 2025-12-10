import { LargeLogo } from '@/assets';
import { Layout, Loader } from '@/shared/components';

import cls from './CharactersList.module.scss';

export const CharactersList = () => {
  return (
    <Layout>
      <section className={`container ${cls.charactersList}`}>
        <img
          className={cls.logo}
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
