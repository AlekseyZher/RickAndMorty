import { LargeLoading, SmallLoading } from '@/assets';

import styles from './Loader.module.scss';

interface LoaderProps {
  size: 'large' | 'small';
  title?: string;
}

export const Loader = (props: LoaderProps) => {
  const { size, title } = props;

  return (
    <div className={styles.loaderWrapper}>
      <img
        src={size === 'large' ? LargeLoading : SmallLoading}
        alt='Loading...'
        className={size === 'large' ? styles.large : styles.small}
      />
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
  );
};
