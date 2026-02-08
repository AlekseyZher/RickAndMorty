import { Link } from 'react-router-dom';

import { ErrorLogo } from '@/assets';
import { Layout } from '@/shared/components';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <Layout>
      <section className={styles.notFoundPage}>
        <img
          src={ErrorLogo}
          alt='Error'
        />
        <Link
          to='/'
          className={styles.homeButton}
        >
          Go to main page
        </Link>
      </section>
    </Layout>
  );
};
