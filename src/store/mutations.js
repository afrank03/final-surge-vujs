import { SET_DAYS_ITEMS } from './mutation-types';

export default {
  [SET_DAYS_ITEMS](state, payload) {
    state.daysItems = payload;
  },
};
