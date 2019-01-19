<template>
  <input type="button" value="Generate random RGB" @click="generateRandomItemForRandomDate()" />
</template>

<script>
import availableDayItems from '../config/available-day-items';
import Month from '../domain/month/Month';

export default {
  name: 'CalendarButton',
  methods: {
    generateRandomItemForRandomDate() {
      let daysItems = this.$store.getters.daysItems;
      let randomDate = Math.floor(
        Math.random() * Month.getLastDate() + 1
      );

      daysItems[`day-${randomDate}`].items = this.$_generateRandomItems();

      this.$store.dispatch('setDaysItems', daysItems);
    },
    $_generateRandomItems() {
      const upTo = 10;
      const amountOfItems = Math.floor((Math.random() * upTo) + 1);
      let i;
      let randomItemIndex;
      let items = [];

      for (i = 0; i < amountOfItems; i++) {
          randomItemIndex =  Math.floor((Math.random() * 3));
          items.push(availableDayItems[randomItemIndex]);
      }
      return items;
    },
  },
};
</script>

<style scoped lang="scss">
input {
  font-size: 14px;
  padding: 5px; 
  cursor: pointer;
}
</style>
