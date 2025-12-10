import type { PropsWithChildren } from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import cls from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${cls.layout}`}>
      <Header />
      <main className={cls.main}>{children}</main>
      <Footer />
    </div>
  );
};
