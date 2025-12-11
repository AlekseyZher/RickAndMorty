import { useState, useEffect, useRef } from 'react';

import { ArrowDropClickLarge } from '@/assets';
import { classNames } from '@/shared/helpers';

import classes from './Selector.module.scss';

export interface Option {
  label: string;
  value: string;
}

type SelectOptionContentProps = Partial<Option>;

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.value}</>;
};

export interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  variant?: 'large' | 'small';
  value?: string;
  placeholder?: string;
  SelectorOptionComponent?: React.FC<SelectOptionContentProps>;
}

export const Selector = (props: SelectProps) => {
  const {
    options,
    variant = 'large',
    placeholder = '',
    onChange,
    SelectorOptionComponent = DefaultSelectOptionContent
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

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
    setSelected(item);
    setIsOpen(false);
    onChange?.(item.value);
  };

  return (
    <div
      className={classNames(classes.selector, {
        [classes.small]: variant === 'small'
      })}
      ref={selectRef}
    >
      <button
        type='button'
        className={classNames(classes.button, {
          [classes.small]: variant === 'small'
        })}
        onClick={handleClick}
      >
        {variant === 'small' ? (
          <SelectorOptionComponent value={selected?.label || placeholder} />
        ) : (
          <SelectorOptionComponent value={selected?.label || placeholder} />
        )}
        <ArrowDropClickLarge
          className={classNames(classes.arrowBtn, {
            [classes.open]: isOpen,
            [classes.small]: variant === 'small'
          })}
        />
      </button>
      {isOpen && options.length && (
        <ul
          className={classNames(classes.selectOptions, {
            [classes.optionsSmall]: variant === 'small'
          })}
          role='listbox'
        >
          {options.map((item) => (
            <li
              key={item.value}
              className={classNames(classes.selectOption, {
                [classes.optionSelected]: item.value === selected?.value,
                [classes.optionsSmall]: variant === 'small'
              })}
              role='option'
              onClick={() => handleClickOption(item)}
            >
              <SelectorOptionComponent value={item.label} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
