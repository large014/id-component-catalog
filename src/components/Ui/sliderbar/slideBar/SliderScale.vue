<template>
  <div ref="sliderscale_wrap" class="sliderscale_wrap" :style="scaleStyles">
    <div class="scalebar start"></div>
    <div class="scalebar end"></div>
    <div v-for="n in step" :key= "n" class="scalebar" :ref= n ></div>
  </div>
</template>

<script>
export default {
  name: 'SliderScale',
  props: {
    step:Number,
    barW:{},
    color : {},
    wrap_top:{},
    scale_top:{},
  },
  computed:{
    $sliderscale_wrap(){
      return this.$refs.sliderscale_wrap;
    },
    scaleStyles(){
      return{
        '--scale_c' : this.color,
        '--wrap_top' : this.wrap_top,
        '--scale_top' : this.scale_top,
        '--first_p' : (parseInt(this.barW) / 2 ) + "px",
        '--last_p' : (parseInt(this.barW) / 2 ) + "px",
        '--barW' : this.barW
      }
    }
  },
  mounted(){
    let cnt = 0;
    for (const key in this.$refs) {
       if(key != "sliderscale_wrap"){
         cnt +=1;
         this.$refs[key][0].style.left = Math.floor( (this.$sliderscale_wrap.clientWidth) / (this.step + 1) ) * cnt +  "px";
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sliderscale_wrap{
  --scale_c : "#000";
  --wrap_top : "-10px";
  --scale_top : "10px";
  --first_p : "20px";
  --last_p  : "100px";
  --barW : "5px";

  position: absolute;
  width: calc(100% - var(--barW));
  height: 2px;
  top: var(--wrap_top);
  left: calc(var(--barW) / 2);
  background-color: var(--scale_c);

  .scalebar{
    height: 20px;
    position: absolute;
    width: 2px;
    border-left: 1px solid var(--scale_c);
    top: var(--scale_top);

    &.start{
      left :0;
    }
    &.end{
      right: -1px;
    }
  }
}
</style>
