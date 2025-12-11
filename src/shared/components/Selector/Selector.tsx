import { useState, useEffect, useRef } from 'react';

import { ArrowDropClickLarge } from '@/assets';
import { classNames } from '@/shared/helpers';

import styles from './Selector.module.scss';

export interface Option {
  label: string;
  value: string;
}

type SelectOptionContentProps = Partial<Option>;

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.label}</>;
};

export interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
  variant?: 'large' | 'small';
  placeholder?: string;
  SelectorOptionComponent?: React.FC<SelectOptionContentProps>;
}

export const Selector = (props: SelectProps) => {
  const {
    options,
    variant = 'large',
    placeholder = '',
    value,
    onChange,
    SelectorOptionComponent = DefaultSelectOptionContent
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((item) => item.value === value) ?? null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => setIsOpen(!isOpen);
  const handleClickOption = (item: Option) => {
    setIsOpen(false);
    onChange?.(item.value);
  };

  return (
    <div
      ref={selectRef}
      className={classNames(styles.selector, {
        [styles.small]: variant === 'small'
      })}
    >
      <button
        type='button'
        className={classNames(styles.button, {
          [styles.small]: variant === 'small'
        })}
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
            [styles.open]: isOpen,
            [styles.small]: variant === 'small'
          })}
        />
      </button>

      {isOpen && options.length > 0 && (
        <ul
          className={classNames(styles.selectOptions, {
            [styles.optionsSmall]: variant === 'small' //
          })}
        >
          {options.map((item) => (
            <li
              key={item.value}
              className={classNames(styles.selectOption, {
                [styles.optionSelected]: item.value === value,
                [styles.small]: variant === 'small'
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
