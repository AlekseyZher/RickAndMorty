import { Crash } from '@/assets';
import { Layout } from '@/shared/components';
import { classNames } from '@/shared/helpers';

import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <Layout>
      <section className={classNames('container', [styles.errorPage])}>
        <img
          src={Crash}
          alt='Crash'
        />
        <button
          className={styles.resetButton}
          onClick={reloadPage}
        >
          Reload the page
        </button>
      </section>
    </Layout>
  );
};
