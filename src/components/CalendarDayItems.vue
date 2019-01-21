<template>
  <div>
    <li
      @click="removeItem(index)"
      class="c-calendar-day-item"
      :key="`day-item-${index}`"
      v-for="(color, index) in dayItems"
      v-bind:class="getItemColor(color)"
    ></li>
  </div>
</template>

<script>
export default {
  name: 'CalendarDayItems',
  props: {
    dayItems: Array,
    weekIndex: Number,
    dayIndex: Number,
    date: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getItemColor(color) {
      const validColors = ['red', 'green', 'blue'];

      const className = validColors.includes(color)
        ? `c-calendar-day-item--${color}`
        : '';

      return className;
    },
    removeItem(index) {
      let monthWeeks;
      monthWeeks = this.$store.getters.daysItems;

      monthWeeks[this.weekIndex][this.dayIndex].items.splice(index, 1);

      this.$store.dispatch('setDaysItems', monthWeeks);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/colors";

.c-calendar-day-item {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 2px;
  list-style: none;
  cursor: pointer;

  &--red {
    background: red;
  }

  &--green {
    background: green;
  }

  &--blue {
    background: blue;
  }
}
</style>
