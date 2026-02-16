import { Link } from 'react-router-dom';

import { ErrorLogo } from '@/assets';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
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
  );
};
