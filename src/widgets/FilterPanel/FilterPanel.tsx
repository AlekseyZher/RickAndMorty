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
  onNameChange: (value: string) => void;
  species: string;
  onSpeciesChange: (value: string) => void;
  gender: string;
  onGenderChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

export const FilterPanel = ({
  name,
  onNameChange,
  species,
  onSpeciesChange,
  gender,
  onGenderChange,
  status,
  onStatusChange
}: FilterPanelProps) => {
  return (
    <div className={styles.filterPanel}>
      <Input
        onChange={onNameChange}
        value={name}
        variant='bordered'
        placeholder='Filter by name...'
        icon={<SearchIcon />}
      />
      <Selector
        onChange={onSpeciesChange}
        options={SPECIES_OPTIONS}
        value={species}
        placeholder='Species'
      />
      <Selector
        onChange={onGenderChange}
        options={GENDER_OPTIONS}
        value={gender}
        placeholder='Gender'
      />
      <Selector
        onChange={onStatusChange}
        options={STATUS_OPTIONS}
        value={status}
        placeholder='Status'
      />
    </div>
  );
};
