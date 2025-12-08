import type { PropsWithChildren } from 'react';
import cls from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${cls.layout}`}>
      <Header />
      <main className={cls.main}>{children}</main>
      <Footer />
    </div>
  );
};
