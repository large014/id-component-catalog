<template>
  <div class="app">
    <h1>vue-fade-text</h1>

    <button @click="_onClick">show/hide</button>

    <FadeText ref="text">一行のテキストでも</FadeText>
    <FadeText ref="text2">
      複数行のテキストでも
      <br />アニメーション
      <br />ができます
    </FadeText>
  </div>
</template>

<script>
import FadeText from "./FadeText.vue";

export default {
  name: "Sample_FadeText",
  components: {
    FadeText
  },

  methods: {
    _onClick() {
      let text = this.$refs.text;
      if (text.isShow) {
        text.hide();
      } else {
        text.show();
      }
      let text2 = this.$refs.text2;
      if (text2.isShow) {
        text2.hide();
      } else {
        text2.show();
      }
    }
  }
};
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  p {
    font-size: 3rem;
    color: black;
  }
}
</style>
