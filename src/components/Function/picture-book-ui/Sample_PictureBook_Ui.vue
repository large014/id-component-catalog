<template>
  <div class="app">
    <PictureBook :pages="pages" ref="book" />
  </div>
</template>

<script>
import PictureBook from "./PictureBook.vue";

export default {
  name: "Sample_PictureBook_Ui",
  components: {
    PictureBook
  },

  data() {
    return {
      pages: [
        // "./dummy/5d189b81-996c-406d-8980-00240a110108.jpg",
        // "./dummy/5d10e7be-c844-4dd5-9d19-00970a110086.jpg",
        // "./dummy/5d10e7da-a440-45a9-a492-009c0a110086.jpg",
        // "./dummy/5d10e6ac-4fc0-49e2-b783-00970a110086.jpg",
        // "./dummy/5d189b87-1d30-4885-9bce-00270a110108.jpg",
        // "./dummy/5d10e8fe-d1e0-4068-be1c-00a10a110086.jpg",
        // "./dummy/5d10e907-020c-482f-9d42-00a10a110086.jpg",
        // "./dummy/5d10ef07-9b44-41af-9e39-00a20a110086.jpg",
        // "./dummy/5d10e983-97c8-4be0-8e07-009e0a110086.jpg",
        // "./dummy/5d10ee31-d3c8-4fd9-a02c-009a0a110086.jpg",
        // "./dummy/5d10eb75-4148-4ea5-8868-00900a110086.jpg",
        // "./dummy/5d10eb80-a3e4-435f-9430-00960a110086.jpg",
        // "./dummy/5d10ee3d-4b90-4c49-9086-00900a110086.jpg",
        // "./dummy/5d10ecf5-2d58-4ed4-a2d3-00a20a110086.jpg",
        // "./dummy/5d10f122-0cf0-4502-9990-009b0a110086.jpg",
        // "./dummy/5d10ed15-4bd8-48e6-a0d0-00970a110086.jpg"
        "./sample/1.jpg",
        "./sample/2.jpg",
        "./sample/3.jpg",
        "./sample/4.jpg",
        "./sample/5.jpg",
        "./sample/6.jpg",
        "./sample/7.jpg",
        "./sample/8.jpg",
        // "@/sample/1.jpg",
        // "@/sample/2.jpg",
        // "@/sample/3.jpg",
        // "@/sample/4.jpg",
        // "@/sample/5.jpg",
        // "@/sample/6.jpg",
        // "@/sample/7.jpg",
        // "@/sample/8.jpg"
      ]
    };
  },

  mounted() {
    window.addEventListener("resize", this.resize);
  },

  methods: {
    resize() {
      this.$refs.book.resize();
    }
  }
};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
