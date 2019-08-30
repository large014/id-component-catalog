<template>
  <div class="sample_sliderbar_wrappear">
    <div class="sliderbarArea">
      <div class="sample sample1">
        <Sample1/>
      </div>
      <div class="sample sample2">
        <Sample2/>
      </div>
      <div class="sample sample3">
        <Sample3/>
      </div>
      <div class="sample sample4">
        <Sample4/>
      </div>
      <div class="sample sample5">
        <Sample5/>
      </div>
    </div>
  </div>
</template>

<script>
import Sample1 from './Sample1.vue'
import Sample2 from './Sample2.vue'
import Sample3 from './Sample3.vue'
import Sample4 from './Sample4.vue'
import Sample5 from './Sample5.vue'

export default {
  name: 'Sample_Sliderbar',
  components: {
    Sample1,
    Sample2,
    Sample3,
    Sample4,
    Sample5,
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped>

.sample_sliderbar_wrappear{
  text-align: center;
}

.sliderbar{
  margin: 0 auto;
}

.sample{
  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.sliderbarArea{
  margin-top: 50px;
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
