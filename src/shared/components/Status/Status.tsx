import { classNames } from '@/shared/helpers';

import styles from './Status.module.scss';

export type StatusesType = 'alive' | 'dead' | 'unknown';

interface StatusProps {
  status?: StatusesType;
}

export const Status = ({ status = 'unknown' }: StatusProps) => {
  if (!status) return null;
  return (
    <div
      className={classNames(styles.status, {}, [
        styles[status].toLocaleLowerCase()
      ])}
    ></div>
  );
};
