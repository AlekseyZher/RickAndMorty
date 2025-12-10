import { classNames } from '@/shared/helpers';

import cls from './Status.module.scss';

const STATUS_COLORS = {
  Alive: 'green',
  Dead: 'red',
  Unknown: 'orange'
};

export type StatusesType = keyof typeof STATUS_COLORS;

interface StatusProps {
  status: StatusesType;
}

export const Status = ({ status }: StatusProps) => {
  const color = STATUS_COLORS[status] ?? 'orange';
  return <div className={classNames(cls.status, {}, [cls[color]])}></div>;
};
