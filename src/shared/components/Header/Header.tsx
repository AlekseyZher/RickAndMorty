import { LogoIcon, ThemeIcon, LangIcon } from '@/assets';
import cls from './Header.module.scss';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={`container ${cls.headerContent}`}>
        <div className={cls.headerLogo}>
          <LogoIcon />
        </div>
        <div className={cls.headerButtonGroup}>
          <button
            type='button'
            className={cls.buttonTheme}
            disabled={true}
          >
            <ThemeIcon />
          </button>
          <button
            type='button'
            className={cls.buttonTheme}
            disabled={true}
          >
            <LangIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
