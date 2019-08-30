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
  name: 'LineAnimation04',
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
  $all_duration: 600ms;
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

  $second_side_delay: 450ms;
  .second_side {
    &:before,
    &:after {
      width: 1px;
      height: 43%;
      transition: all 10ms ease;
    }
    &:before {
      bottom: 57%;
      left: 100%;
    }
    &:after {
      top: 57%;
      right: 100%;
    }
    &:hover::after {
      animation: second_side_animation $all_duration $second_side_delay forwards, second_top_move $all_duration $second_side_delay forwards
    }
    &:hover::before {
      animation: second_side_animation $all_duration $second_side_delay forwards, second_bottom_move $all_duration $second_side_delay forwards
    }
    @keyframes second_side_animation {
      0% {
        height: 43%;
      }
      20% {
        height: 0%;
      }
      80% {
        height: 0%;
      }
      100% {
        height: 43%;
      }
    }
    @keyframes second_top_move {
      0% {
        top: 57%;
      }
      20% {
        top: 57%;
      }
      80% {
        top: 100%;
      }
      100% {
        top: 57%;
      }
    }
    @keyframes second_bottom_move {
      0% {
        bottom: 57%;
      }
      20% {
        bottom: 57%;
      }
      80% {
        bottom: 100%;
      }
      100% {
        bottom: 57%;
      }
    }

    $top_bottom_delay: 300ms;
    .top_bottom {
      &:before,
      &:after {
        width: 100%;
        height: 1px;
        transition: all 10ms ease;
      }
      &:before {
        bottom: 0;
        left: 0;
      }
      &:after {
        top: 0;
        right: 0;
      }
      &:hover::after {
        animation: top_bottom_animation $all_duration $top_bottom_delay forwards, tb_right_move $all_duration $top_bottom_delay forwards;
      }
      &:hover::before {
        animation: top_bottom_animation $all_duration $top_bottom_delay forwards, tb_left_move $all_duration $top_bottom_delay forwards;
      }
      @keyframes top_bottom_animation {
        0% {
          width: 100%;
        }
        20% {
          width: 0%;
        }
        80% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
      @keyframes tb_right_move {
        0% {
          right: 0%;
        }
        20% {
          right: 0%;
        }
        80% {
          right: 100%;
        }
        100% {
          right: 0%;
        }
      }
      @keyframes tb_left_move {
        0% {
          left: 0%;
        }
        20% {
          left: 0%;
        }
        80% {
          left: 100%;
        }
        100% {
          left: 0%;
        }
      }

      $first_side_delay: 150ms;
      .first_side {
        &:before,
        &:after {
          width: 1px;
          height: 50%;
          transition: all 10ms ease;
        }
        &:before {
          bottom: 0%;
          left: 100%;
        }
        &:after {
          top: 0%;
          right: 100%;
        }
        &:hover::after {
          animation: first_side_animation $all_duration $first_side_delay forwards, first_top_move $all_duration $first_side_delay forwards;
        }
        &:hover::before {
          animation: first_side_animation $all_duration $first_side_delay forwards, first_bottom_move $all_duration $first_side_delay forwards;
        }
        @keyframes first_side_animation {
          0% {
            height: 50%;
          }
          20% {
            height: 0%;
          }
          80% {
            height: 0%;
          }
          100% {
            height: 50%;
          }
        }
        @keyframes first_top_move {
          0% {
            top: 0%;
          }
          20% {
            top: 0%;
          }
          80% {
            top: 50%;
          }
          100% {
            top: 0%;
          }
        }
        @keyframes first_bottom_move {
          0% {
            bottom: 0%;
          }
          20% {
            bottom: 0%;
          }
          80% {
            bottom: 50%;
          }
          100% {
            bottom: 0%;
          }
        }

        .side_line {
          margin: 0;
          padding: 27px 7px;

          &:after,
          &:before {
            width: 50px;
            height: 1px;
            transition: all 10ms ease;
          }
          &:before {
            top: 50%;
            left: 100%;
          }
          &:after {
            top: 50%;
            right: 100%;
          }
          &:hover::before {
            animation: side_line_animation $all_duration forwards, side_left_move $all_duration forwards;
          }
          &:hover::after {
            animation: side_line_animation $all_duration forwards, side_right_move $all_duration forwards;
          }
          @keyframes side_line_animation {
            0% {
              width: 50px;
            }
            20% {
              width: 0px;
            }
            81% {
              width: 0px;
            }
            100% {
              width: 50px;
            }
          }
          @keyframes side_left_move {
            0% {
              left: 100%;
            }
            20% {
              left: 100%;
            }
            80% {
              left: 150%;
            }
            100% {
              left: 100%;
            }
          }
          @keyframes side_right_move {
            0% {
              right: 100%;
            }
            20% {
              right: 100%;
            }
            80% {
              right: 150%;
            }
            100% {
              right: 100%;
            }
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
