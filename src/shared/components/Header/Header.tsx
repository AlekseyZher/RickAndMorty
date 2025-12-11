import { LogoIcon, ThemeIcon, LangIcon } from '@/assets';

import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.headerContent}`}>
        <div className={classes.headerLogo}>
          <LogoIcon />
        </div>
        <div className={classes.headerButtonGroup}>
          <button
            type='button'
            className={classes.buttonTheme}
            disabled={true}
          >
            <ThemeIcon />
          </button>
          <button
            type='button'
            className={classes.buttonTheme}
            disabled={true}
          >
            <LangIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
