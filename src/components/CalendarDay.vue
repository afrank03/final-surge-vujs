<template>
  <div class="c-calendar-day">
    <p class="light-text">{{weekday}}</p>
    <p>{{date}}</p>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: {
    date: Number,
    weekday: String,
  },
};
</script>

<style scoped lang="scss">
@import './../scss/colors';

.c-calendar-day {
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 1px solid $color-grey;

  .light-text {
    color: $color-grey-darker;
  }
}
</style>
