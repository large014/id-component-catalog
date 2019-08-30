<template>
  <div class="container">
    <div class="book">
      <img ref="image" />
    </div>
    <Control :pages="pages" @change="loadImage" ref="control" />
  </div>
</template>

<script>
import Control from "./Control.vue";
export default {
  components: {
    Control
  },
  props: {
    pages: Array
  },
  data() {
    return {
      size: {
        width: 0,
        height: 0
      }
    };
  },

  mounted() {
    this.loadImage();
  },

  methods: {
    loadImage() {
      const image = this.$refs.image;
      // image.style = {};
      image.src = this.pages[this.$refs.control.page - 1];
      image.onload = () => {
        this.size.width = image.width;
        this.size.height = image.height;
        this.resize();
      };
    },

    resize() {
      const w = this.$el.clientWidth,
        h = this.$el.clientHeight,
        image = this.$refs.image;

      const iw = this.size.width,
        ih = this.size.height;

      //画像が横長
      if (iw / ih > w / h) {
        image.style.width = w + "px";
      } else {
        image.style.width = Math.floor((iw * h) / ih) + "px";
      }
    }
  },

  computed: {}
};
</script>



<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.book {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 1500px;
  }
}
</style>
