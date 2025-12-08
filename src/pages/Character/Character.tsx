import { Layout, Loader } from '@/shared/components';
import { ArrowBackIcon } from '@/assets';
import cls from './Character.module.scss';

export const Character = () => {
  return (
    <Layout>
      <section className={`container ${cls.character}`}>
        <button className={cls.backButton}>
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
