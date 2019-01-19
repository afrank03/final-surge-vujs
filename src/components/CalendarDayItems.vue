<template>
  <div>
    <li 
      @click="removeItem(index)"
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
    date: {
      type: Number,
      required: true,
    }
  },
  methods: {
    itemColor(color) {
      const validColors = ['red', 'green', 'blue'];

        const className = validColors.includes(color) 
          ? `c-calendar-day-item--${color}` 
          : '';

      return className;
    },
    removeItem(index) {
      let daysItems = this.$store.getters.daysItems;
      
      daysItems[`day-${this.date}`].items.splice(index, 1);

      this.$store.dispatch('setDaysItems', daysItems);
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
