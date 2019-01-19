import { SET_DAYS_ITEMS } from './mutation-types';

export default {
  setDaysItems({ commit }, payload) {
    commit(SET_DAYS_ITEMS, payload);
  },
};
