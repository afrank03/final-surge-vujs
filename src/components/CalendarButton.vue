<template>
  <input
    type="button"
    value="Generate random RGB"
    @click="generateRandomItemForRandomDate()"
  />
</template>

<script>
import ItemsGenerator from '../mixins/item-generator';
import Month from '../domain/month/Month';

export default {
  name: 'CalendarButton',
  mixins: [ItemsGenerator],
  methods: {
    generateRandomItemForRandomDate() {
      const numberOfWeeks = 4;
      const numberOfDays = 6; // starts from 0
      const randomWeek = Math.floor(Math.random() * numberOfWeeks);
      const randomDay = Math.floor(Math.random() * numberOfDays);

      const daysItems = this.$store.getters.daysItems;

      daysItems[randomWeek][randomDay].items = this.generateRandomItems();

      this.$store.dispatch('setDaysItems', daysItems);
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
