<template>
  <div class="btn">
    <p class="wrap" :style="border_style">
      <a v-bind:href="url" :style="btn_style">
        {{ msg }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LineAnimation00',
  props: {
    msg: String,
    url: String,
    color: String,
    bgGradation: String,
    fontSize: String,
    borderColor: String
  },
  computed: {
    btn_style() {
      return {
        '--color': this.color,
        '--padding': this.padding,
        '--bgGradation': this.bgGradation,
        '--fontSize': this.fontSize
      }
    },
    border_style() {
      return {
        '--borderPadding': this.borderPadding,
        '--borderColor': this.borderColor
      }
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  --borderColor: #d4b1cf;
  $border-Color: var(--borderColor);
  .wrap {
    position: relative;
    margin: 0;
    border: 1px solid $border-Color;
    padding: 25px 5px;

    &:after,
    &:before {
      content: "";
      width: 50px;
      height: 1px;
      background-color: $border-Color;
      position: absolute;
      transition: all 400ms;
    }
    &:hover::after,
    &:hover::before {
      content: "";
      width: 80px;
      height: 1px;
    }

    &:before {
      top: 53%;
      right: 100%;
      border-bottom: 4px solid #fff;
    }
    &:after {
      top: 47%;
      left: 100%;
      border-top: 4px solid #fff;
    }

    a {
      --fontSize: 15px;
      font-size: var(--fontSize);
      padding: 20px 50px;
      --color: #fff;
      color: var(--color);
      --bgGradation: linear-gradient(45deg, #8cced2 5%,#c09cdd 45%, #ecbeca 95%);
      background: var(--bgGradation);
      background-size: 600% 600%;
      text-decoration: none;
      animation: bgAnimation 5000ms ease infinite;
      animation-play-state: running;
    }
    a:hover {
      animation-play-state: paused;
    }
  }
}

@keyframes bgAnimation {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
</style>







<!-- // -->
