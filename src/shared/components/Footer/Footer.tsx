import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.title}>
        Made with love by{' '}
        <a
          href='https://t.me/AleksZh93'
          target='_blank'
          rel='noopener noreferrer'
          className={classes.link}
        >
          @AleksZh93
        </a>
      </p>
    </footer>
  );
};
