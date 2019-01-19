<template>
  <div class="c-calendar-day">
    <p class="light-text">{{weekday}}</p>
    <p>{{date}}</p>
    <ul v-if="dayItems.length > 0">
      <CalendarDayItems :date="date" :dayItems="dayItems"/>
    </ul>
  </div>
</template>

<script>
import CalendarDayItems from './CalendarDayItems';
import { SET_DAYS_ITEMS } from '../store/mutation-types';
import { constants } from 'http2';

const availableItems = ['red', 'blue', 'green'];

export default {
  name: 'CalendarDay',
  data() {
    return {
      dayItems: [],
    };
  },
  components: {
    CalendarDayItems,
  },
  mounted() {
    this.generateInitialRandomItems();
  },
  props: {
    date: Number,
    weekday: String,
  },
  methods: {
    /**
     * This most likely should be extracted into a helper class or similar.
     */
    generateInitialRandomItems() {
      const upTo = 10;
      const amountOfItems = Math.floor((Math.random() * upTo) + 1);
      let i;
      let randomItemIndex;

      for (i = 0; i < amountOfItems; i++) {
          randomItemIndex =  Math.floor((Math.random() * 3));
          this.dayItems.push(availableItems[randomItemIndex]);
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import './../scss/colors';

.c-calendar-day {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 5px;
  border: 1px solid $color-grey;
  overflow: hidden;

  .light-text {
    color: $color-grey-darker;
  }

  p {
    line-height: 5px;
  }

  ul {
    position: absolute;
    top: 30px;
    left: 0px;
    padding: 0;
    text-align: left;
  }
}
</style>
