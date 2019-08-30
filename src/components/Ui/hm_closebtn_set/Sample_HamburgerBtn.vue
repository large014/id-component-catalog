<template>
  <div class="hmcs">
    <h1>Menu Buttons</h1>

    <section>
      <h2>type 1</h2>
      <HamburgerMenuCloseSetType1></HamburgerMenuCloseSetType1>
    </section>

    <section>
      <h2>type 2</h2>
      <HamburgerMenuCloseSetType2></HamburgerMenuCloseSetType2>
    </section>

    <section>
      <h2>type 3</h2>
      <HamburgerMenuCloseSetType3></HamburgerMenuCloseSetType3>
    </section>

    <section>
      <h2>type 4</h2>
      <HamburgerMenuCloseSetType4></HamburgerMenuCloseSetType4>
    </section>

    <section>
      <h2>type 5</h2>
      <HamburgerMenuCloseSetType5></HamburgerMenuCloseSetType5>
    </section>

    <section>
      <h2>type 6</h2>
      <HamburgerMenuCloseSetType6></HamburgerMenuCloseSetType6>
    </section>

    <section>
      <h2>type 7</h2>
      <HamburgerMenuCloseSetType7></HamburgerMenuCloseSetType7>
    </section>

    <section>
      <h2>type 8</h2>
      <HamburgerMenuCloseSetType8></HamburgerMenuCloseSetType8>
    </section>
  </div>
</template>

<script>
import HamburgerMenuCloseSetType1 from "./HamburgerMenuCloseSetType1.vue";
import HamburgerMenuCloseSetType2 from "./HamburgerMenuCloseSetType2.vue";
import HamburgerMenuCloseSetType3 from "./HamburgerMenuCloseSetType3.vue";
import HamburgerMenuCloseSetType4 from "./HamburgerMenuCloseSetType4.vue";
import HamburgerMenuCloseSetType5 from "./HamburgerMenuCloseSetType5.vue";
import HamburgerMenuCloseSetType6 from "./HamburgerMenuCloseSetType6.vue";
import HamburgerMenuCloseSetType7 from "./HamburgerMenuCloseSetType7.vue";
import HamburgerMenuCloseSetType8 from "./HamburgerMenuCloseSetType8.vue";

export default {
  name: 'HamburgerMenuCloseSet',

  components: {
    HamburgerMenuCloseSetType1,
    HamburgerMenuCloseSetType2,
    HamburgerMenuCloseSetType3,
    HamburgerMenuCloseSetType4,
    HamburgerMenuCloseSetType5,
    HamburgerMenuCloseSetType6,
    HamburgerMenuCloseSetType7,
    HamburgerMenuCloseSetType8
  }
}
</script>

<style lang="scss" scoped>
.hmcs {
  display: flex;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    margin-bottom: 80px;
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: bold;
  }
  section {
    width: 25%;
    margin-bottom: 80px;
  }
}
</style>