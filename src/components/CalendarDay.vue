<template>
  <div class="c-calendar-day">
    <p class="light-text">{{weekday}}</p>
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
  components: {
    CalendarDayItems,
  },
  props: {
    day: {},
    weekIndex: Number,
    dayIndex: Number,
  },
  computed: {
    weekday() {
      return Month.getWeekdayByDate(this.day.date);
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
