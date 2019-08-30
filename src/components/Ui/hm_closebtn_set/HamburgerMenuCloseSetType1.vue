<template>
  <button
    v-bind:class="{ open: isOpen }"
    v-on:click="isOpen = !isOpen">
    <span class="box">
      <span class="item"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HamburgerMenuCloseSetType1',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$paddingX: 18px;
$paddingY: 18px;
$lineWidth: 40px;
$lineHeight: 4px;
$lineSpacing: 8px;
$lineColor: #000;
$lineBorderRadius: 2px;
$moveTransitionDuration: 0.4s;

$hoverOpacity: 0.7;
$hoverTransitionDuration: 0.8s;
$hoverTransitionTimingFunction: linear;
$hoverUseFilter: false;
$hoverFilter : 0.5;

button {
  padding: $paddingY $paddingX;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: $hoverTransitionDuration;
  transition-timing-function: $hoverTransitionTimingFunction;
  overflow: visible;
  &:hover {
    @if $hoverUseFilter == true {
      filter: $hoverFilter;
    }
    @else {
      opacity: $hoverOpacity;
    }
  }
  .box {
    width: $lineWidth;
    height: $lineHeight * 3 + $lineSpacing * 2;
    display: inline-block;
    position: relative;
  }
  .item {
    display: block;
    top: $lineHeight / 2;
    margin-top: $lineHeight / -2;
    &,
    &:after,
    &:before {
      width: $lineWidth;
      height: $lineHeight;
      background-color: $lineColor;
      border-radius: $lineBorderRadius;
      position: absolute;
      transition-property: transform;
      transition-duration: $moveTransitionDuration;
      transition-timing-function: ease;
    }
    &:after,
    &:before {
      content: "";
      display: block;
    }
    &:before {
      top: $lineHeight + $lineSpacing;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: $moveTransitionDuration;
    }
    &:after {
      top: ($lineHeight * 2) + ($lineSpacing * 2);
      bottom: ($lineSpacing + $lineHeight) * -1;
    }
  }
  &.open {
    .item {
      $y-offset: $lineSpacing + $lineHeight;
      transform: translate3d(0, $y-offset, 0) rotate(45deg);
      &:before {
        transform: rotate(-45deg) translate3d($lineWidth / -7, $lineSpacing * -1, 0);
        opacity: 0;
      }
      &:after {
        transform: translate3d(0, $y-offset * -2, 0) rotate(-90deg);
      }
    }
  }
}
</style>