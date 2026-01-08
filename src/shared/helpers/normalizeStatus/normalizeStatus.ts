import type { StatusesType } from '@/shared/components/Status/Status';

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

const isValidStatus = (value: unknown): value is StatusesType => {
  return isString(value) && ['alive', 'dead', 'unknown'].includes(value);
};

export const normalizeStatus = (input: unknown): StatusesType => {
  const lower = isString(input) ? input.toLowerCase() : '';
  return isValidStatus(lower) ? lower : 'unknown';
};
