import { CheckIcon, CloseIcon, EditIcon } from '@/assets';
import { classNames } from '@/shared/helpers';

import styles from './EditButtons.module.scss';

export interface EditButtonsProps {
  isEditMode: boolean;
  onCancel: () => void;
  onSave: () => void;
  onEdit: () => void;
}

export const EditButtons = ({
  isEditMode,
  onCancel,
  onSave,
  onEdit
}: EditButtonsProps) => {
  return (
    <div
      className={classNames(styles.editButtons, {
        [styles.isEdit]: isEditMode
      })}
    >
      {isEditMode ? (
        <>
          <button
            className={styles.onCancelButton}
            onClick={onCancel}
          >
            <CloseIcon />
          </button>
          <button
            className={styles.onSaveButton}
            onClick={onSave}
          >
            <CheckIcon />
          </button>
        </>
      ) : (
        <button
          className={styles.onEditButton}
          onClick={onEdit}
        >
          <EditIcon />
        </button>
      )}
    </div>
  );
};
