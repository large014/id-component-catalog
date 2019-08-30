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
$backgroundColor: #28737c;
$titleFontSize: 32px;
$subdescriptionFontSize: 18px;

a {
  position: relative;
  display: block;
  overflow: hidden;
  background: $backgroundColor;
  font-family: 'Montserrat', sans-serif;
  vertical-align: middle;
  line-height: 0;

  img {
    position: relative;
    width: 100%;
    max-width: none;
    opacity: 1;
    transform: scale(1.04);
    transition: 600ms all;
  }
  figure {
    margin: 0;
  }
  figcaption {
    line-height: 1.6;
    &::before {
      position: absolute;
      top: -5%;
      left: 5%;
      width: 100%;
      height: 100%;
      background: rgba(#fff, 0.5);
      content: '';
      transition: transform 0.6s;
      transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
      pointer-events: none;
    }
    h2, p {
      z-index: 2;
      transition: 600ms all;
    }
    h2 {
      position: absolute;
      left: 50px;
      top: 50px;
      color: $fontColor;
      font-size: $titleFontSize;
      font-weight: bold;
      text-shadow: 0px 0px 80px #000;
    }
    p {
      position: absolute;
      margin: 0;
      right: 50px;
      bottom: 50px;
      max-width: 60%;
      color: $fontColor;
      font-size: $subdescriptionFontSize;
      font-weight: bold;
      opacity: 0;
    }
  }
  &:hover {
    img {
      opacity: 0.6;
      transform: scale(1);
    }
    figcaption {
      &::before {
        transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,115%,0);
      }
      p {
        transition-delay: 40ms;
        opacity: 1;
      }
    }
  }
}
</style>