import { useState, useEffect, useRef } from 'react';

import { ArrowDropClickLarge } from '@/assets';
import { classNames } from '@/shared/helpers';

import cls from './Selector.module.scss';

export interface Options {
  label: string;
  value: string;
}

interface SelectOptionContentProps {
  value?: string;
  label?: string;
}

export const DefaultSelectOptionContent = (props: SelectOptionContentProps) => {
  return <>{props.value}</>;
};

export interface SelectProps {
  options: Options[];
  variant?: 'large' | 'small';
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  SelectorOptionComponent?: React.FC<SelectOptionContentProps>;
}

export const Selector = (props: SelectProps) => {
  const {
    options,
    variant = 'large',
    value = 'Alive',
    placeholder,
    onChange,
    SelectorOptionComponent = DefaultSelectOptionContent
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Options | null>(null);
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

  const handleClickOption = (item: Options) => {
    setSelected(item);
    setIsOpen(false);
    onChange?.(item.value);
  };

  return (
    <div
      className={classNames(cls.selector, {
        [cls.small]: variant === 'small'
      })}
      ref={selectRef}
    >
      <button
        type='button'
        className={classNames(cls.button, {
          [cls.small]: variant === 'small'
        })}
        onClick={handleClick}
      >
        {variant === 'small' ? (
          <div className={cls.buttonInner}>
            <SelectorOptionComponent value={selected?.label || value} />
          </div>
        ) : (
          <SelectorOptionComponent value={selected?.label || placeholder} />
        )}
        <ArrowDropClickLarge
          className={classNames(cls.arrowBtn, {
            [cls.open]: isOpen,
            [cls.small]: variant === 'small'
          })}
        />
      </button>
      {isOpen && options.length && (
        <ul
          className={classNames(cls.selectOptions, {
            [cls.optionsSmall]: variant === 'small'
          })}
          role='listbox'
        >
          {options.map((item) => (
            <li
              key={item.value}
              className={classNames(cls.selectOption, {
                [cls.optionSelected]: item.value === selected?.value,
                [cls.optionsSmall]: variant === 'small'
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
