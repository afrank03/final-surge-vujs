<template>
  <div class="c-calendar-app">
    <CalendarHeader :headerText="currentDate" />
    <section class="c-calendar-app__body">
      <WeekDays />
      <article
        :key="`week-${weekIndex}`"
        v-for="(week, weekIndex) in thisMonthDatesWeeks"
        class="c-calendar-app__row"
      >
        <div
          class="date-container"
          :key="`day-${dayIndex}`"
          v-for="(day, dayIndex) in week"
        >
          <CalendarDay
            :day="day"
            :weekIndex="weekIndex"
            :dayIndex="dayIndex"
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
import WeekDays from './WeekDays.vue';
import Month from '../domain/month/Month';
import ItemsGenerator from '../mixins/item-generator';

export default {
  name: 'CalendarApp',
  mixins: [
    ItemsGenerator,
  ],
  components: {
    CalendarHeader,
    CalendarDay,
    CalendarButton,
    WeekDays,
  },
  mounted() {
    const currentMonthWeeks = Month.getMonthSplitByWeeks(true);

    currentMonthWeeks.forEach(((week) => {
      week.forEach(((day) => {
        if (day.items !== undefined) {
          const items = this.generateRandomItems();
          items.forEach((item) => {
            day.items.push(item);
          });
        }
      }));
    }));

    this.$store.dispatch('setDaysItems', currentMonthWeeks);
  },
  computed: {
    thisMonthDatesWeeks() {
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
@import "./../scss/main";
.date-container--shade {
  background: $color-light-grey;
}
.c-calendar-app {
  height: 100%;
  padding: 5px;

  &__body {
    padding: 10px;
    border-top: 1px solid $color-grey;
  }

  &__row {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }
}
</style>
