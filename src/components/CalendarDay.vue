<template>
  <div
    class="c-calendar-day"
    v-bind:class="[ !isThisMonthDate ? otherMonthDayClass : '', isCurrentDate ? currentDate : '' ]"
  >
    <p>{{day.date}}</p>
    <ul v-if="day.items != undefined">
      <CalendarDayItems
        :date="day.date"
        :weekIndex="weekIndex"
        :dayIndex="dayIndex"
        :dayItems="day.items"
      />
    </ul>
  </div>
</template>

<script>
import CalendarDayItems from './CalendarDayItems.vue';
import Month from '../domain/month/Month';

export default {
  name: 'CalendarDay',
  data() {
    return {
      otherMonthDayClass: 'other-month-day',
      currentDate: 'c-calendar-day--current',
    };
  },
  components: {
    CalendarDayItems,
  },
  props: {
    day: {},
    weekIndex: Number,
    dayIndex: Number,
  },
  computed: {
    isThisMonthDate() {
      return this.day.date !== undefined;
    },
    isCurrentDate() {
      const d = new Date();
      return this.day.date === d.getDate();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/colors";

.c-calendar-day {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 5px;
  border: 1px solid $color-grey;
  border-radius: 5px;
  background: $color-lighter-grey;
  overflow: hidden;

  &--current {
    border: 2px solid $color-grey-darker;
  }

  p {
    line-height: 20px;
    font-weight: 600;
    color: $color-grey-darker;
  }

  ul {
    position: absolute;
    top: 30px;
    left: 0px;
    padding: 5px;
    text-align: left;
  }
}

.other-month-day {
  border: none;
  background: $color-lighter-grey;
}
</style>
