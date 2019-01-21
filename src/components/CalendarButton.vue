<template>
  <input
    type="button"
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
  border: 2px solid rebeccapurple;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  background: #7fff00; // Extract to colors
  background-image: url("./../assets/rgb-icon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;
}
</style>
