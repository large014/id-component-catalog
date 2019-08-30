<template>
  <div class="hmas">
    <h1>Menu Buttons (Arrow)</h1>

    <section>
      <h2>type 1</h2>
      <HamburgerMenuArrowSetType1></HamburgerMenuArrowSetType1>
    </section>

    <section>
      <h2>type 2</h2>
      <HamburgerMenuArrowSetType2></HamburgerMenuArrowSetType2>
    </section>

    <section>
      <h2>type 3</h2>
      <HamburgerMenuArrowSetType3></HamburgerMenuArrowSetType3>
    </section>

    <section>
      <h2>type 4</h2>
      <HamburgerMenuArrowSetType4></HamburgerMenuArrowSetType4>
    </section>
    <p>※線の太さを変更の場合、button.openのときのbeforeとafterの位置の調整が必要の可能性</p>
  </div>
</template>

<script>
import HamburgerMenuArrowSetType1 from "./HamburgerMenuArrowSetType1.vue";
import HamburgerMenuArrowSetType2 from "./HamburgerMenuArrowSetType2.vue";
import HamburgerMenuArrowSetType3 from "./HamburgerMenuArrowSetType3.vue";
import HamburgerMenuArrowSetType4 from "./HamburgerMenuArrowSetType4.vue";

export default {
  name: 'HamburgerMenuArrowSet',

  components: {
    HamburgerMenuArrowSetType1,
    HamburgerMenuArrowSetType2,
    HamburgerMenuArrowSetType3,
    HamburgerMenuArrowSetType4
  }
}
</script>

<style lang="scss" scoped>
.hmas {
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