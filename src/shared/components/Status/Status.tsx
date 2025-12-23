import { classNames } from '@/shared/helpers';

import styles from './Status.module.scss';

export type StatusesType = 'Alive' | 'Dead' | 'Unknown';

interface StatusProps {
  status?: StatusesType;
}

export const Status = ({ status }: StatusProps) => {
  if (!status) return null;
  return (
    <div
      className={classNames(styles.status, {}, [
        styles[status].toLocaleLowerCase()
      ])}
    ></div>
  );
};
