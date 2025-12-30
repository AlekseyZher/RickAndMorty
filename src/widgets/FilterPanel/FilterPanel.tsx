import { useState } from 'react';

import { SearchIcon } from '@/assets';
import { Input, Selector } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import styles from './FilterPanel.module.scss';

export const FilterPanel = () => {
  const [inputValue, setInputValue] = useState('');
  const [speciesValue, setSpeciesValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [statusValue, setsStatusValue] = useState('');

  return (
    <section className={styles.filterPanel}>
      <Input
        onChange={(value) => setInputValue(value)}
        value={inputValue}
        variant='bordered'
        placeholder='Filter by name...'
        icon={<SearchIcon />}
      />
      <Selector
        onChange={(value) => setSpeciesValue(value)}
        options={SPECIES_OPTIONS}
        value={speciesValue}
        placeholder='Species'
      />
      <Selector
        onChange={(value) => setGenderValue(value)}
        options={GENDER_OPTIONS}
        value={genderValue}
        placeholder='Gender'
      />
      <Selector
        onChange={(value) => setsStatusValue(value)}
        options={STATUS_OPTIONS}
        value={statusValue}
        placeholder='Status'
      />
    </section>
  );
};
