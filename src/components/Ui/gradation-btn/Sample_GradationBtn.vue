<template>
  <div class="app">
    <LineAnimation00 msg="lineAnimation00" url="#"/>
    <LineAnimation01 msg="lineAnimation01" url="#"/>
    <LineAnimation02 msg="lineAnimation02" url="#"/>
    <LineAnimation03 msg="lineAnimation03" url="#"/>
    <LineAnimation04 msg="lineAnimation04" url="#"/>
  </div>
</template>

<script>
import LineAnimation00 from './LineAnimation00.vue'
import LineAnimation01 from './LineAnimation01.vue'
import LineAnimation02 from './LineAnimation02.vue'
import LineAnimation03 from './LineAnimation03.vue'
import LineAnimation04 from './LineAnimation04.vue'

export default {
  name: 'Sample_GradationBtn',
  components: {
    LineAnimation00,
    LineAnimation01,
    LineAnimation02,
    LineAnimation03,
    LineAnimation04
  }
}
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
