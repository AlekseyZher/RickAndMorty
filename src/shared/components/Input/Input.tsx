import { type ReactNode } from 'react';

import { classNames } from '@/shared/helpers';

import styles from './Input.module.scss';

interface InputProps {
  value: string;
  placeholder?: string;
  size?: 'large' | 'small';
  variant?: 'underlined' | 'bordered';
  icon?: ReactNode;
  showClear?: boolean;
  onChange: (value: string) => void;
}

export const Input = ({
  value,
  placeholder = '',
  variant = 'underlined',
  icon,
  size = 'large',
  showClear = false,
  onChange
}: InputProps) => {
  return (
    <div className={styles.input}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        className={classNames(styles.inputInternal, {
          [styles.bordered]: variant === 'bordered',
          [styles.underlined]: variant === 'underlined',
          [styles.small]: size === 'small'
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {showClear && (
        <button
          type='button'
          className={styles.clearButton}
          onClick={() => onChange('')}
        >
          ×
        </button>
      )}
    </div>
  );
};
