<template>
  <div class="sample4_wrappear">
      <div class="sliderbarArea">
        <p class="text">例4 : 範囲-100 〜 400 Range、ハンドルカスタム設定</p>
        <Sliderbar ref="sliderbar" class="sliderbar" :settings="settings" @bar_update="getValue">
          <div slot="handle1" class="handle handle1">
          </div>
          <div slot="handle2" class="handle handle2">
          </div>
        </Sliderbar>
        <div class="valueArea">
          <p>value1 : {{value1}}</p>
          <p>rate_value1 : {{rateValue1}}%</p>
          <p>value2 : {{value2}}</p>
          <p>rate_value2 : {{rateValue2}}%</p>
        </div>
      </div>
  </div>
</template>

<script>
import Sliderbar from './slideBar/Sliderbar.vue'

export default {
  name: 'Sample4',
  props: {
  },
  components:{
    Sliderbar
  },
  data(){
    return{
      value1 : 0,
      rateValue1 : 0,
      stepValue1 : 0,
      value2 : 0,
      rateValue2 : 0,
      stepValue2 : 0,
      settings:{
        type : 'range',
        width : '400px',
        activebar_C : "#07cdAA",
        deactivebar_C : "#CCC",
        gageArea_C : "#CCC",
        gageArea_H : "20px",
        gageArea_R : "15px",
        bar_H : "20px",
        handle_W : "20px",
        handle_H : "20px",
        handle_R : "15px",
        handle_min_C : "#3f51b5",
        handle_max_C : "#ff51b5",
        min_value : -100,
        max_value : 400,
        rate: 100,
        // tick_ValueList:[0, 100, 200, 300, 400, 500],
        // tick_ValueList:["月","火","水","木","金","土","日"],
        isscale : true,
        scale_Step : 3,
        scale_C : "#000",
        scale_BaseTop : "-10px",
        scale_Top : "-10px",
      }
    }
  },
  computed:{
  },
  methods:{
    getValue(){
      this.value1 = this.$refs.sliderbar.value1;
      this.rateValue1 = this.$refs.sliderbar.rateValue1;
      this.value2 = this.$refs.sliderbar.value2;
      this.rateValue2 = this.$refs.sliderbar.rateValue2;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text{
  font-weight: bold;
  margin-bottom: 40px;
}

.valueArea{
  width: 400px;
  border : 1px solid #000;
  padding: 10px;
  margin-top: 20px;
  p:not(:last-child){
    margin-bottom: 5px;
  }
}

button{
  cursor: pointer;
  border: 1px solid #000;
  background-color: #CCC;
  padding: 10px;
  margin: 4px;
  margin-top: 20px;
}

</style>
