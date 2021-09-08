import {
  GET_HEROES,
  GET_HERO_PROFILE,
  ADD_TO_FAVORITES,
} from '../../constants/heroes';

export default (state: any, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_HEROES:
      return {
        ...state,
        heroes: payload,
      };
    case GET_HERO_PROFILE:
      return {
        ...state,
        selectedHero: payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...payload],
      };
    default:
      return state;
  }
};
