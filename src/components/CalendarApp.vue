<template>
  <div class="c-calendar-app">
    <CalendarHeader :headerText="currentDate" />
    <section class="c-calendar-app__body">
      <article class="c-calendar-app__row">
        <div
          class="date-container"
          :key="day.indexOf"
          v-for="day in thisMonthDates"
        >
          <CalendarDay
            :day="day"
            :weekday="getWeekdayByDate(day.date)"
          />
        </div>
      </article>
      <CalendarButton />
    </section>
  </div>
</template>

<script>
import CalendarHeader from './CalendarHeader.vue';
import CalendarDay from './CalendarDay.vue';
import CalendarButton from './CalendarButton.vue';
import Month from '../domain/month/Month';
import itemsGenerator from '../mixins/item-generator';

export default {
  name: 'CalendarApp',
  mixins: [
    itemsGenerator,
  ],
  components: {
    CalendarHeader,
    CalendarDay,
    CalendarButton,
  },
  data() {
    return {
      dayItems: [],
    };
  },
  mounted() {
    const dates = Month.getAllCurrentMonthDays();
    let calendarDays = {};
    dates.forEach(((date) => {
      const oneDay = {
        [`day-${date}`]: {
          date,
          items: this.generateRandomItems(),
        },
      };
      calendarDays = { ...calendarDays, ...oneDay };
    }));
    this.$store.dispatch('setDaysItems', calendarDays);
  },
  computed: {
    thisMonthDates() {
      return this.$store.getters.daysItems;
    },
    currentDate() {
      const date = new Date();
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    },
  },
  methods: {
    getWeekdayByDate(date) {
      return Month.getWeekdayByDate(date);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/colors";

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
