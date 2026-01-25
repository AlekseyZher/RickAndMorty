import { LogoIcon, ThemeIcon, LangIcon } from '@/assets';
import { classNames } from '@/shared/helpers';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', [styles.headerContent])}>
        <div className={styles.headerLogo}>
          <LogoIcon />
        </div>
        <div className={styles.headerButtonGroup}>
          <button
            type='button'
            className={styles.buttonTheme}
            disabled={true}
          >
            <ThemeIcon />
          </button>
          <button
            type='button'
            className={styles.buttonTheme}
            disabled={true}
          >
            <LangIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
