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
  name: 'HamburgerMenuCloseSetType8',
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
$moveTransitionDuration: 0.26s;

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
    perspective: $lineWidth * 2;
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
      transition-timing-function: ease;
    }
    &:after,
    &:before {
      content: "";
      display: block;
        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:before {
      top: ($lineSpacing + $lineHeight) * -1;
    }
    &:after {
      bottom: ($lineSpacing + $lineHeight) * -1;
    }
  }
  .item {
    transition: transform $moveTransitionDuration cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &.open {
    .item {
      background-color: transparent;
      transform: rotateX(180deg) rotateY(180deg);
      &:before {
        transform: translate3d(0, $lineHeight + $lineSpacing, 0) rotate(45deg);
      }
      &:after {
        transform: translate3d(0, ($lineHeight + $lineSpacing) * -1, 0) rotate(-45deg);
      }
    }
  }
}
</style>