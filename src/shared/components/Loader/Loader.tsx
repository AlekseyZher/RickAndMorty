import { LargeLoading, SmallLoading } from '@/assets';

import classes from './Loader.module.scss';

interface LoaderProps {
  size: 'large' | 'small';
  title?: string;
}

export const Loader = (props: LoaderProps) => {
  const { size, title } = props;

  return (
    <div className={classes.loaderWrapper}>
      <img
        src={size === 'large' ? LargeLoading : SmallLoading}
        alt='Loading...'
        className={size === 'large' ? classes.large : classes.small}
      />
      {title && <h3 className={classes.title}>{title}</h3>}
    </div>
  );
};
