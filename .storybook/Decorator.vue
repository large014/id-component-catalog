<template lang="pug">
    <div>
  .decorator
    slot(name="story")
    </div>
</template>

<script>
export default {
  name: 'Decorator'
}
</script>

<style lang="scss">
@import "~/assets/css/formula.css";
</style>