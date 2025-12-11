import type { PropsWithChildren } from 'react';

import { Footer, Header } from '@/shared/components';

import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
