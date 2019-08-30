<template>
  <div class="control">
    <button ref="prev" class="prev" @click="prev" v-if="!firstPage"></button>
    <button ref="next" class="next" @click="next" v-if="!lastPage"></button>
    <footer>
      <input
        type="range"
        id="range"
        min="1"
        :max="pages.length"
        step="1"
        :value="page"
        @input="change"
        ref="range"
      />
      <div class="control-footer-buttons">
        <button @click="head" :class="{inactive:firstPage}">
          <p>最初</p>
        </button>
        <button @click="prev" :class="{inactive:firstPage}">
          <p>前</p>
        </button>
        <button @click="next" :class="{inactive:lastPage}">
          <p>次</p>
        </button>
        <button @click="tail" :class="{inactive:lastPage}">
          <p>最後</p>
        </button>
        <p>{{page}} / {{pages.length}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: {
    pages: Array
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    prev() {
      this.page--;
      this.page = Math.max(1, this.page);
      this.$emit("change", this.page);
    },

    next() {
      this.page++;
      this.page = Math.min(this.pages.length, this.page);
      this.$emit("change", this.page);
    },

    head() {
      this.page = 1;
      this.$emit("change", this.page);
    },

    tail() {
      this.page = this.pages.length;
      this.$emit("change", this.page);
    },

    change() {
      this.page = this.$refs.range.value;
      this.$emit("change", this.page);
    }
  },

  computed: {
    firstPage() {
      return this.page === 1;
    },
    lastPage() {
      return this.page === this.pages.length;
    }
  }
};
</script>


<style lang="scss" scoped>
.control {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  > button {
    position: absolute;
    width: 50%;
    height: 100%;
    opacity: 0;

    &.prev {
      left: 0;
      top: 0;
      // cursor: url(prev.png), auto;
    }

    &.next {
      right: 0;
      top: 0;
      // cursor: url(next.png), auto;
    }
  }
}

footer {
  position: absolute;
  width: 100%;
  // height: 100px;
  padding: 15px 15px 15px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  .control-footer-buttons {
    p {
      color: white;
      font-size: 24px;
      line-height: 24px;
      // height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > p {
      width: 100px;
      display: inline-block;
      margin-left: 15px;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      padding: 0;
      appearance: none;
      // vertical-align: top;
      // margin: 0 15px;

      &.inactive {
        opacity: 0.5;
        pointer-events: none;
      }
      > p {
        width: 60px;
      }
    }
  }
}

#range {
  width: 100%;
}

@media screen and (min-width: 750px) and (max-width: 899px) {
}

@media screen and (min-width: 900px) {
  footer {
    padding: 30px 0 15px;
    .control-footer-buttons {
      p {
        height: 40px;
      }
      button {
        margin: 0 15px;
      }
    }
  }
  #range {
    width: 750px;
  }
}
</style>
