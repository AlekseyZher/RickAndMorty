import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>
        Made with love by{' '}
        <a
          href='https://t.me/AleksZh93'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          @AleksZh93
        </a>
      </p>
    </footer>
  );
};
