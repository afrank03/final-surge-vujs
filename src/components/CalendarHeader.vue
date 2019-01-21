<template>
  <header>
    <h2><span class="light-text">Today is</span> {{ headerText }}</h2>
  </header>
</template>

<script>
export default {
  name: 'CalendarHeader',
  props: {
    headerText: String,
  },
};
</script>

<style scoped lang="scss">
@import "./../scss/colors";

header {
  display: flex;
  justify-content: center;
}

.light-text {
  color: $color-grey-darker;
}
</style>
