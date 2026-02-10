import { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  Input,
  Selector,
  Status,
  type StatusesType
} from '@/shared/components';
import { STATUS_LABELS, STATUS_OPTIONS } from '@/shared/constants';
import { normalizeStatus } from '@/shared/helpers';
import type { Character } from '@/types';

import { EditButtons } from '../EditButtons/EditButtons';

import styles from './CharactersCard.module.scss';

interface CharacterCardProps {
  character: Character;
  onUpdate: (updates: Partial<Character>) => void;
}

export const CharactersCard = ({ character, onUpdate }: CharacterCardProps) => {
  const { name, gender, species, location, image } = character;
  const status = normalizeStatus(character.status);
  const [readOnly, setReadOnly] = useState(true);
  const [currentName, setCurrentName] = useState(name);
  const [currentLocation, setCurrentLocation] = useState(location.name);
  const [currentStatus, setCurrentStatus] = useState<StatusesType>(status);

  const onEdit = () => {
    setReadOnly(false);
  };

  const onCancel = () => {
    setCurrentName(name);
    setCurrentLocation(location.name);
    setCurrentStatus(status);
    setReadOnly(true);
  };

  const onSave = () => {
    onUpdate({
      name: currentName,
      status: currentStatus,
      location: { ...location, name: currentLocation }
    });
    setReadOnly(true);
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
            to={`/character/${character.id}`}
            className={styles.name}
            aria-label='go to character'
          >
            {currentName}
          </Link>
        ) : (
          <Input
            value={currentName}
            onChange={setCurrentName}
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
            <p className={styles.value}>{currentLocation}</p>
          ) : (
            <div className={styles.inputWrapper}>
              <Input
                value={currentLocation}
                onChange={setCurrentLocation}
                size='small'
              />
            </div>
          )}
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Status</p>
          <div className={styles.status}>
            {readOnly ? (
              <>
                <p className={styles.value}>{STATUS_LABELS[currentStatus]}</p>
                <Status status={currentStatus} />
              </>
            ) : (
              <Selector
                size='small'
                value={currentStatus}
                options={STATUS_OPTIONS}
                onChange={setCurrentStatus}
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
