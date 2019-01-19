<template>
  <header>
    {{headerText}}
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
</style>
