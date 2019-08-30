<template>
  <div class="vue_spot_modal" :class="{active : isShow}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'spotModal',
  props: {
    position: String
  },
  data(){
    return {
      isShow: false,
    }
  },
  methods: {
    spotModalShow() {
      // console.log('show');
      const _parent = this.$el.parentNode;
      const _target = this.$el;

      if(this.position == 'bottom') {
        _target.style.top = (_parent.clientHeight + 10) + 'px';
        _target.style.left = '50%';
        _target.style.marginLeft = -(_target.clientWidth/2) + 'px';
      }
      else if(this.position == 'top') {
        _target.style.bottom = (_parent.clientHeight + 10) + 'px';
        _target.style.left = '50%';
        _target.style.marginLeft = -(_target.clientWidth/2) + 'px';
      }
      else if(this.position == 'right') {
        _target.style.top = '50%';
        _target.style.left = (_parent.clientWidth + 10) + 'px';
        _target.style.marginTop = -(_target.clientHeight/2) + 'px';
      }
      else if(this.position == 'left') {
        _target.style.top = '50%';
        _target.style.right = (_parent.clientWidth + 10) + 'px';
        _target.style.marginTop = -(_target.clientHeight/2) + 'px';
      }
      else if(this.position == 'tooltip') {
        this.setTooltip();
      }

      this.isShow = true;
    },

    spotModalHide() {
      // console.log('hide');
      this.isShow = false;
    },

    setTooltip() {
      const _target = this.$el;

      this.$el.parentNode.addEventListener('mousemove', (e)=> {
        _target.style.left = (e.offsetX + 15) + 'px';
        _target.style.top = (e.offsetY + 15) + 'px';
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vue_spot_modal {
  transition: opacity 0.2s ease, visibility 0.2s ease;
  position: absolute;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
