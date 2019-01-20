import { SET_DAYS_ITEMS } from './mutation-types';

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  [SET_DAYS_ITEMS](state, payload) {
    state.daysItems = payload;
  },
};
