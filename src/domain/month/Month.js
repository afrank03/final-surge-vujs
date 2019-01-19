import Weekdays from './Weekdays';

class Month {
  constructor() {
    this.days = [];
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
  }

  /**
   * Get all days for current month
   * @returns {Array} Of all days
   */
  getAllCurrentMonthDays() {
    const lastDayOfTheMonth = this._getLastDate();

    let i;
    for (i = 1; i <= lastDayOfTheMonth; i++) {
      this.days.push(i);
    }

    return this.days;
  }

  /**
   * @param {Number} date
   * @return {String} Weekday name
   */
  getWeekdayByDate(date) {
    const dayNumber = new Date(
      this.currentYear,
      this.currentMonth,
      date,
    );

    return Weekdays[dayNumber.getDay()];
  }

  /**
   * Private method
   * Getting last date of the month
   *
   * @returns {Number}
   */
  _getLastDate() {
    const date = 0;
    const lastDay = new Date(
      this.currentYear,
      this.currentMonth + 1,
      date,
    );

    return lastDay.getDate();
  }
}

export default new Month();
