import availableDayItems from '../config/available-day-items';

export default {
  methods: {
    generateRandomItems() {
      const upTo = 10;
      const amountOfItems = Math.floor(Math.random() * upTo + 1);
      let i;
      let randomItemIndex;
      const items = [];

      for (i = 0; i < amountOfItems; i++) {
        randomItemIndex = Math.floor(Math.random() * 3);
        items.push(availableDayItems[randomItemIndex]);
      }
      return items;
    },
  },
};
