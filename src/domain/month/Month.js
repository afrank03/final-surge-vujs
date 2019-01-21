import Weekdays from './Weekdays';

class Month {
  constructor() {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
  }

  /**
   * Get all days for current month
   * @returns {Array} Of all days
   */
  getAllCurrentMonthDays() {
    const lastDayOfTheMonth = this.getLastDate();

    let days;
    let i;
    days = [];

    for (i = 1; i <= lastDayOfTheMonth; i++) {
      days.push(i);
    }

    return days;
  }

  /**
   * @param {Number} date
   * @return {String} Weekday name
   */
  getWeekdayByDate(date) {
    const dayNumber = new Date(this.currentYear, this.currentMonth, date);

    return Weekdays[dayNumber.getDay()];
  }

  getWeekDays(mondayFirst = false) {
    let weekDays;

    weekDays = Weekdays;

    if (mondayFirst) {
      weekDays.push(weekDays.shift());
    }
    return weekDays;
  }

  /**
   * @returns {Array} Current month split by weeks
   */
  getMonthSplitByWeeks(mondayFirst = false) {
    let iterationWeek;

    const daysInWeek = 7;
    const d = new Date();
    const currentMonthDates = this.getAllCurrentMonthDays();
    // Sun, Mon, Tue, Wed, Thu, Fri, Sat
    let monthInWeeks;
    monthInWeeks = [
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
    ];

    currentMonthDates.forEach((date) => {
      const dayNumber = new Date(d.getFullYear(), d.getMonth(), date);

      iterationWeek = Math.floor(date / daysInWeek);
      monthInWeeks[iterationWeek][dayNumber.getDay()] = {
        date,
        items: [],
      };
    });

    if (mondayFirst) {
      monthInWeeks.forEach((week) => {
        week.push(week.shift());
      });
    }

    return monthInWeeks;
  }

  /**
   * Private method
   * Getting last date of the month
   *
   * @returns {Number}
   */
  getLastDate() {
    const date = 0;
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, date);

    return lastDay.getDate();
  }
}

export default new Month();
