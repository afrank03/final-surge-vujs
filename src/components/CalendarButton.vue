<template>
  <input
    type="button"
    value="Generate random RGB"
    @click="generateRandomItemForRandomDate()"
  />
</template>

<script>
import itemsGenerator from '../mixins/item-generator';
import Month from '../domain/month/Month';

export default {
  name: 'CalendarButton',
  mixins: [itemsGenerator],
  methods: {
    generateRandomItemForRandomDate() {
      const randomDate = Math.floor(Math.random() * Month.getLastDate() + 1);
      let daysItems;

      daysItems = this.$store.getters.daysItems;

      daysItems[`day-${randomDate}`].items = this.generateRandomItems();

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
