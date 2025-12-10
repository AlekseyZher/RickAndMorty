import { LargeLoading } from '@/assets';
import { SmallLoading } from '@/assets';

import cls from './Loader.module.scss';

interface LoaderProps {
  size: 'large' | 'small';
  title?: string;
}

export const Loader = (props: LoaderProps) => {
  const { size, title } = props;

  return (
    <div className={cls.loaderWrapper}>
      <img
        src={size === 'large' ? LargeLoading : SmallLoading}
        alt='Loading...'
        className={size === 'large' ? cls.large : cls.small}
      />
      {title && <h3 className={cls.title}>{title}</h3>}
    </div>
  );
};
