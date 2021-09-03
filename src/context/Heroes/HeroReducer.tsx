import {GET_HEROES, GET_HERO_PROFILE} from '../../constants/heroes';

export default (state, action) => {
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
        selectHero: payload,
      };
    default:
      return state;
  }
};
