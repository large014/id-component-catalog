<template>
  <FadeTextRenderer :class="{show:isShow}">
    <slot></slot>
  </FadeTextRenderer>
</template>

<script>
export default {
  components: {
    FadeTextRenderer: {
      render(h) {
        let arr = [],
          index = 0;
        this.$slots.default.forEach(vnode => {
          if (vnode.text) {
            let characters = [];
            [].forEach.call(vnode.text, c => {
              index++;
              // console.log(index)
              if (c !== " ") {
                characters.push(
                  h(
                    "span",
                    {
                      style: {
                        "transition-delay": index * 0.02 + "s"
                      }
                    },
                    c
                  )
                );
              } else {
                characters.push(" ");
              }
            });
            arr.push(h("span", characters));
          } else if (vnode.tag) {
            arr.push(vnode);
          }
        });
        return h("p", arr);
      }
    }
  },

  data() {
    return {
      isShow: false
    };
  },

  methods: {
    show() {
      this.isShow = true;
    },

    hide() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss">
p {
  > span {
    > span {
      opacity: 0;

      transition: opacity 0.5s ease;
    }
  }

  &.show {
    > span {
      > span {
        opacity: 1;
      }
    }
  }
}
</style>