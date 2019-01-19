<template>
  <div>
    <li 
      class="c-calendar-day-item" 
      :key="`day-item-${index}`"
      v-for="(color, index) in dayItems"
      v-bind:class="itemColor(color)"
    ></li>
  </div>
</template>

<script>
export default {
  name: 'CalendarDayItems',
  data() {
    return {
    };
  },
  props: {
    dayItems: Array,
    date: Number,
  },
  methods: {
    itemColor(color) {
      const validColors = ['red', 'green', 'blue'];

        const className = validColors.includes(color) 
          ? `c-calendar-day-item--${color}` 
          : '';

      return className;
    },
  },
};
</script>

<style scoped lang="scss">
@import './../scss/colors';

.c-calendar-day-item {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 2px;
  list-style: none;

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
