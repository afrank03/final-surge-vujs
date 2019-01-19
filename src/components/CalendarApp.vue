<template>
  <div class="c-calendar-app">
    <CalendarHeader headerText="January 2019" />
    <section class="c-calendar-app__body">
      <article class="c-calendar-app__row">
        <div class="date-container"
          :key="date.indexOf"
          v-for="date in thisMonthDates"
        >
          <CalendarDay 
            :date="date"
            :weekday="getWeekdayByDate(date)"
          />
        </div>
        {{test()}}
      </article>
    </section>
  </div>
</template>

<script>
import CalendarHeader from './CalendarHeader.vue';
import CalendarDay from './CalendarDay.vue';
import Month from '../domain/month/Month';

export default {
  name: 'CalendarApp',
  components: {
    CalendarHeader,
    CalendarDay,
  },
  data() {
    return {
      dates: [],
    };
  },
  computed: {
    thisMonthDates() {
      return Month.getAllCurrentMonthDays();
    },
  },
  methods: {
    test() {
      return this.$store.getters.daysItems;
    },
    getWeekdayByDate(date) {
      return Month.getWeekdayByDate(date);
    },
  },
};
</script>

<style scoped lang="scss">
@import './../scss/colors';

.c-calendar-app {
  background: $color-light-grey;
  padding: 5px;

  &__body {
    height: 100%;
    padding: 10px;
    border: 1px solid $color-grey;
  }

  &__row {
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }
}
</style>
