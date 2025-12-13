import { classNames } from '@/shared/helpers';

import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'underlined' | 'bordered';
  icon?: React.ReactNode;
  onClear?: () => void;
}

export const Input = ({
  value,
  onChange,
  placeholder = '',
  variant = 'underlined',
  icon,
  onClear
}: InputProps) => {
  const showClear = Boolean(value) && typeof onClear === 'function';
  return (
    <div className={styles.input}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        className={classNames(styles.inputInternal, {
          [styles.bordered]: variant === 'bordered',
          [styles.underlined]: variant === 'underlined'
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {showClear && (
        <button
          type='button'
          className={styles.clearButton}
          onClick={onClear}
        >
          ×
        </button>
      )}
    </div>
  );
};
