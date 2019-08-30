<template>
  <div class="btn">
    <div class="second_side" :style="border_style">
      <div class="top_bottom" :style="border_style">
        <div class="first_side" :style="border_style">
          <div class="side_line" :style="border_style">
            <a v-bind:href="url" :style="btn_style">
              {{ msg }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineAnimation01',
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

  .second_side,
  .top_bottom,
  .first_side,
  .side_line {
    position: relative;
    &:before,
    &:after {
      content: "";
      background-color: $border-Color;
      position: absolute;
      transition: all 100ms;
    }
    &:hover::after,
    &:hover::before {
      content: "";
    }
  }

  .second_side {
    &:before,
    &:after {
      width: 1px;
      height: 0;
    }
    &:before {
      top: 0;
      right: 0;
    }
    &:after {
      bottom: 0;
      left: 0;
    }
    &:hover::after,
    &:hover::before {
      height: 43%;
      transition-delay: 300ms;
    }

    .top_bottom {
      &:before,
      &:after {
        width: 0;
        height: 1px;
        transition-delay: 200ms;
      }
      &:before {
        top: 0;
        left: 0;
      }
      &:after {
        bottom: 0;
        right: 0;
      }
      &:hover::after,
      &:hover::before {
        width: 100%;
        transition-delay: 200ms;
      }

      .first_side {
        &:before,
        &:after {
          width: 1px;
          height: 0;
          transition-delay: 300ms;
        }
        &:before {
          top: 50%;
          right: 0;
        }
        &:after {
          bottom: 50%;
          left: 0;
        }
        &:hover::after,
        &:hover::before {
          height: 50%;
          transition-delay: 100ms;
        }

        .side_line {
          margin: 0;
          padding: 27px 7px;

          &:after,
          &:before {
            width: 0px;
            height: 1px;
            transition-delay: 400ms;
          }
          &:before {
            top: 49%;
            right: -49px;
          }
          &:after {
            top: 50%;
            left: -49px;
          }
          &:hover::after,
          &:hover::before {
            width: 50px;
            transition-delay: 0ms;
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
