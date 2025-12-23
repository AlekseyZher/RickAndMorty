import type { StatusesType } from '@/shared/components';

export interface Character {
  name: string;
  gender: string;
  species: string;
  location: string;
  status: StatusesType;
  image: string;
}
