import cls from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <p className={cls.title}>
        Made with love by{' '}
        <a
          href='https://t.me/AleksZh93'
          target='_blank'
          rel='noopener noreferrer'
          className={cls.link}
        >
          @AleksZh93
        </a>
      </p>
    </footer>
  );
};
