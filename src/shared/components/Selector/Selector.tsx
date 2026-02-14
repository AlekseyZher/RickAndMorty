import {
  useState,
  useEffect,
  useRef,
  type ComponentType,
  useCallback
} from 'react';

import { ArrowDropClickLarge } from '@/assets';
import { classNames } from '@/shared/helpers';

import styles from './Selector.module.scss';

export interface Option<T = string> {
  label: string;
  value: T;
}

type SelectOptionContentProps<T> = Partial<Option<T>>;

export const DefaultSelectOptionContent = <T,>(
  props: SelectOptionContentProps<T>
) => {
  return <>{props.label}</>;
};

export interface SelectProps<T> {
  options: Option<T>[];
  value: T;
  size?: 'large' | 'small';
  placeholder?: string;
  onChange: (value: T) => void;
  SelectorOptionComponent?: ComponentType<SelectOptionContentProps<T>>;
}

export const Selector = <T extends string | number = string>(
  props: SelectProps<T>
) => {
  const {
    options,
    value,
    size = 'large',
    placeholder = '',
    onChange,
    SelectorOptionComponent = DefaultSelectOptionContent
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((item) => item.value === value) ?? null;

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleClick = () => setIsOpen((prev) => !prev);
  const handleClickOption = (item: Option<T>) => {
    setIsOpen(false);
    onChange?.(item.value);
  };

  return (
    <div
      ref={selectRef}
      className={classNames(styles.selector, {
        [styles.small]: size === 'small'
      })}
    >
      <button
        type='button'
        className={styles.button}
        onClick={handleClick}
      >
        {selectedOption ? (
          <span>
            <SelectorOptionComponent
              label={selectedOption.label}
              value={selectedOption.value}
            />
          </span>
        ) : (
          placeholder
        )}

        <ArrowDropClickLarge
          className={classNames(styles.arrowBtn, {
            [styles.open]: isOpen
          })}
        />
      </button>

      {isOpen && options.length > 0 && (
        <ul className={styles.selectOptions}>
          {options.map((item) => (
            <li
              key={item.value}
              className={classNames(styles.selectOption, {
                [styles.optionSelected]: item.value === value
              })}
              onClick={() => handleClickOption(item)}
            >
              <SelectorOptionComponent
                label={item.label}
                value={item.value}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
