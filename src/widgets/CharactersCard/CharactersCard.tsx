import { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Input,
  Selector,
  Status,
  type StatusesType
} from '@/shared/components';
import { STATUS_LABELS, STATUS_OPTIONS } from '@/shared/constants';
import type { Character } from '@/types';

import { EditButtons } from '../EditButtons/EditButtons';

import styles from './CharactersCard.module.scss';

interface CharacterCardProps {
  character: Character;
}

export const CharactersCard = ({ character }: CharacterCardProps) => {
  const { name, gender, species, location, status, image } = character;
  const [readOnly, setReadOnly] = useState(true);
  const [currentName, setCurrentName] = useState(name);
  const [currentLocation, setCurrentLocation] = useState(location);
  const [currentStatus, setCurrentStatus] = useState<StatusesType>(status);

  const onEdit = () => {
    setReadOnly(false);
  };

  const onCancel = () => {
    setReadOnly(true);
  };

  const onSave = () => {
    setReadOnly(true);
  };

  const handleInputNameChange = (value: string) => {
    setCurrentName(value);
  };

  const handleInputLocationChange = (value: string) => {
    setCurrentLocation(value);
  };

  const handleStatusChange = (value: StatusesType) => {
    setCurrentStatus(value);
  };

  return (
    <div className={styles.card}>
      <div className={styles.icons}>
        <EditButtons
          isEditMode={!readOnly}
          onCancel={onCancel}
          onEdit={onEdit}
          onSave={onSave}
        />
      </div>
      <div className={styles.image}>
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className={styles.info}>
        {readOnly ? (
          <Link
            to='characters/:id'
            className={styles.name}
            aria-label='go to character'
          >
            {name}
          </Link>
        ) : (
          <Input
            value={currentName}
            onChange={handleInputNameChange}
          />
        )}
        <div className={styles.row}>
          <p className={styles.label}>Gender</p>
          <p className={styles.value}>{gender}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Species</p>
          <p className={styles.value}>{species}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Location</p>
          {readOnly ? (
            <p className={styles.value}>{location}</p>
          ) : (
            <Input
              value={currentLocation}
              onChange={handleInputLocationChange}
              size='small'
            />
          )}
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Status</p>
          <div className={styles.status}>
            {readOnly ? (
              <>
                <p className={styles.value}>{STATUS_LABELS[status]}</p>
                <Status status={currentStatus} />
              </>
            ) : (
              <Selector
                size='small'
                value={currentStatus}
                options={STATUS_OPTIONS}
                onChange={handleStatusChange}
                SelectorOptionComponent={({ label, value }) => (
                  <>
                    <span>{label}</span>
                    <Status status={value} />
                  </>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
