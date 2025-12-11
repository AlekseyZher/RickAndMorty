import type { PropsWithChildren } from 'react';

import { Footer, Header } from '@/shared/components';

import classes from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${classes.layout}`}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};
