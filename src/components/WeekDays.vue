<template>
  <section class="c-week-days">
    <div
      v-for="weekDay in weekDays"
      class="c-week-days__day"
    >
      <p>{{weekDay}}</p>
    </div>
  </section>
</template>

<script>
import Month from '../domain/month/Month';

export default {
  name: 'CalendarHeader',
  props: {
    headerText: String,
  },
  computed: {
    weekDays() {
      const mondayFirst = true;
      return Month.getWeekDays(mondayFirst);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/colors";

.c-week-days {
  display: inline-flex;
  justify-content: center;
  color: $color-grey-darker;

  &__day {
    width: 100px;
    margin: 5px;
  }
}
</style>
