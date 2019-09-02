<template>
  <div class="app">
    <iframe ref="iFrame" :src="getPath" frameborder="0" width="100%"></iframe>
  </div>
</template>

<script>
export default {
  name: 'IFrameWrapper',
  props: {
    path: String
  },
  computed:{
    getPath(){
      console.log('path = ' + this.path);
      
      return this.path
    }
  },
  mounted(){
    this.$refs.iFrame.contentWindow.onload = this.changeParentHeight();
    // setTimeout(() => {
    //   changeParentHeight();
    //   console.log('aaaaaaaaaaaaaaaaaaaa');
    // }, 100);

    // setTimeout(this.changeParentHeight.bind(this), 1000);
    // console.log('bbbbbbbbbbbb');
    
  },
  methods:{
    changeParentHeight(){
      // console.log('★★★★★★★★★★test = '+ this.$refs.iFrame.contentWindow.document.body.scrollHeight);
      
      // this.$refs.iFrame.style.height = this.$refs.iFrame.contentWindow.document.body.scrollHeight + "px";
      this.$refs.iFrame.style.height = "400px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
