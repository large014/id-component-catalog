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
  name: 'HamburgerMenuCloseSetType5',
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
$moveTransitionDuration: 0.2s;

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
    top: 50%;
    margin-top: $lineHeight / -2;
    transition-duration: $moveTransitionDuration;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
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
      transition-duration: 0s;
      transition-delay: 0.1s;
      transition-timing-function: linear;
    }
    &:before {
      top: ($lineSpacing + $lineHeight) * -1;
      transition-property: top, opacity;
    }
    &:after {
      bottom: ($lineSpacing + $lineHeight) * -1;
      transition-property: bottom, transform;
    }
  }
  &.open {
    .item {
      transform: rotate(765deg);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      &:after,
      &:before {
        transition-delay: 0s;
      }
      &:before {
        top: 0;
        opacity: 0;
      }
      &:after {
        bottom: 0;
        transform: rotate(90deg);
      }
    }
  }
}
</style>