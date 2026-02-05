import type { StatusesType } from '@/shared/components';

export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  type: string;
  status: StatusesType;
  image: string;
}
