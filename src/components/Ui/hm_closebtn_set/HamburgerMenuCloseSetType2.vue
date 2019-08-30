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
  name: 'HamburgerMenuCloseSetType2',
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
      // transition-duration: 0.075s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &:after,
    &:before {
      content: "";
      display: block;
    }
    &:before {
      top: ($lineSpacing + $lineHeight) * -1;
      transition: top $moveTransitionDuration 0.12s ease, opacity $moveTransitionDuration ease;
    }
    &:after {
      bottom: ($lineSpacing + $lineHeight) * -1;
      transition: bottom $moveTransitionDuration 0.12s ease, transform $moveTransitionDuration cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  &.open {
    .item {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &:before {
        top: 0;
        opacity: 0;
        transition: top $moveTransitionDuration ease, opacity $moveTransitionDuration 0.12s ease;
      }
      &:after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom $moveTransitionDuration ease, transform $moveTransitionDuration 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>