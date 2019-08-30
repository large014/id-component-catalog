<template>
  <a v-bind:href="url">
    <figure>
      <img v-bind:src="imagePath" alt="" />
      <figcaption>
        <h2>{{ title }}</h2>
        <p>{{ subdescription }}</p>
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'ButtonImageType1',
  props: ['url', 'title', 'subdescription', 'imagePath']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$fontColor: #fff;
$gradationTo: #4aab5e;
$gradationFrom: #fe7404;
$titleFontSize: 32px;
$subdescriptionFontSize: 18px;

a {
  position: relative;
  display: block;
  font-family: 'Montserrat', sans-serif;
  vertical-align: middle;
  line-height: 0;
  img {
    width: 100%;
    height: auto;
  }
  figure {
    margin: 0px;
  }
  figcaption {
    margin: 0px;
    box-sizing: border-box;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    padding: 40% 50px 0;
    line-height: 1.6;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(25deg, $gradationTo, $gradationFrom);
      opacity: 0.4;
      transition: 600ms all;
    }
    h2 {
      margin-bottom: 10px;
      color: $fontColor;
      font-size: $titleFontSize;
      font-weight: bold;
    }
    p {
      margin: 0;
      color: $fontColor;
      font-size: $subdescriptionFontSize;
      opacity: 0;
    }
    h2, p {
      position: relative;
      z-index: 2;
      transition: 600ms all;
    }
  }
  &:hover {
    figcaption {
      &::before {
        opacity: 0;
      }
      h2, p {
        transform: translateY(-100px);
      }
      p {
        transition-delay: 40ms;
        opacity: 1;
      }
    }
  }
}
</style>