<template>
  <div class="app">
    <h1>image thumbnail buttons</h1>
    <section>
      <h2>type 1</h2>
      <ul>
        <li>
          <button-image-type1
            url="/"
            title="Frog"
            subdescription="a tailless amphibian with a short squat body, moist smooth skin, and very long hind legs for leaping."
            imagePath="./static/assets/image1.jpg"
          />
        </li>
        <li>
          <button-image-type1
            url="/"
            title="Scenery"
            subdescription="spectacular views of mountain scenery"
            imagePath="./static/assets/image2.jpg"
          />
        </li>
      </ul>
    </section>
    <section>
      <h2>type 2</h2>
      <ul>
        <li>
          <button-image-type2
            url="/"
            title="SUMMER"
            subdescription="夏の終わりの植物の花"
            imagePath="./static/assets/image3.jpg"
          />
        </li>
        <li>
          <button-image-type2
            url="/"
            title="WINTER"
            subdescription="北半球では12月から2月まで、南半球では6月から8月にかけての年の最も寒い時期です。"
            imagePath="./static/assets/image4.jpg"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ButtonImageType1 from './ButtonImageType1'
import ButtonImageType2 from './ButtonImageType2'

export default {
  name: 'Sample_ImageBtn',
  components: {
    'button-image-type1' : ButtonImageType1,
    'button-image-type2' : ButtonImageType2
  }
}
</script>


<style lang="scss" scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 100px 4%;
  h1 {
    margin-bottom: 80px;
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: bold;
  }
  section + section {
    margin-top: 100px;
  }
  ul {
    padding: 0;
    display: flex;
    li {
      width: 50%;
      &:nth-child(even) {
        margin-left: 20px;
      }
      &:nth-child(odd) {
        margin-right: 20px;
      }
    }
  }
}
</style>