import {axiosTool} from '../helpers/axios';
import {Hero} from '../types/hero.types';

export const getHeroes = async () => {
  try {
    const {data} = await axiosTool.get('/id/502.json');
    const hero: Hero = data;
    return hero;
  } catch (error) {
    console.log(error);
  }
};
