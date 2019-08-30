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
  name: 'HamburgerMenuCloseSetType4',
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
$moveTransitionDuration: 0.125s;

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
  overflow: hidden;
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
    transition: background-color $moveTransitionDuration 0.175s ease-in;
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
      top: ($lineSpacing + $lineHeight) * -1;
      left: 0;
      transition: transform $moveTransitionDuration cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s $moveTransitionDuration linear, left $moveTransitionDuration 0.175s ease-in;
    }
    &:after {
      bottom: ($lineSpacing + $lineHeight) * -1;
      top: ($lineHeight) + ($lineSpacing);
      right: 0;
      transition: transform $moveTransitionDuration cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s $moveTransitionDuration linear, right $moveTransitionDuration 0.175s ease-in;
    }
  }
  &.open {
    .item {
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent;
      &:before {
        left: $lineWidth * -2;
        top: $lineWidth * -2;
        transform: translate3d($lineWidth * 2, $lineWidth * 2, 0) rotate(45deg);
        transition: left $moveTransitionDuration ease-out, top 0.05s $moveTransitionDuration linear, transform $moveTransitionDuration 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:after {
        right: $lineWidth * -2;
        top: $lineWidth * -2;
        transform: translate3d($lineWidth * -2, $lineWidth * 2, 0) rotate(-45deg);
        transition: right $moveTransitionDuration ease-out, top 0.05s $moveTransitionDuration linear, transform $moveTransitionDuration 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
  }
}
</style>