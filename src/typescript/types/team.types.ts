import {Hero} from './hero.types';

export interface Team {
  id: string | number[];
  name: string;
  members: Hero[];
}
