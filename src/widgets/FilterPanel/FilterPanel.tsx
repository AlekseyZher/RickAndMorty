import { SearchIcon } from '@/assets';
import { Input, Selector } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import styles from './FilterPanel.module.scss';

interface FilterPanelProps {
  name: string;
  species: string;
  gender: string;
  status: string;
  onNameChange: (value: string) => void;
  onSpeciesChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export const FilterPanel = ({
  name,
  species,
  gender,
  status,
  onNameChange,
  onSpeciesChange,
  onGenderChange,
  onStatusChange
}: FilterPanelProps) => {
  return (
    <div className={styles.filterPanel}>
      <Input
        value={name}
        variant='bordered'
        placeholder='Filter by name...'
        icon={<SearchIcon />}
        showClear={Boolean(name)}
        onChange={onNameChange}
      />
      <Selector
        value={species}
        placeholder='Species'
        options={SPECIES_OPTIONS}
        onChange={onSpeciesChange}
      />
      <Selector
        value={gender}
        placeholder='Gender'
        options={GENDER_OPTIONS}
        onChange={onGenderChange}
      />
      <Selector
        value={status}
        placeholder='Status'
        options={STATUS_OPTIONS}
        onChange={onStatusChange}
      />
    </div>
  );
};
