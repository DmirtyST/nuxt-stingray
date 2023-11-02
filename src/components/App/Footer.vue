<template>
  <div class="footer">
    <div class="footer_image">
      <nuxt-img
        src="https://framerusercontent.com/images/hxLV86t6dbLOy8y8BpHJoDPza0.webp"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .footer {
    height: 43rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        #000 0%,
        rgba(0, 0, 0, 0) 30.62%,
        rgba(0, 0, 0, 0) 77.71%,
        #000 100%
      );
    }
    &_image {
      width: 100%;
      height: 100%;
    }
  }
  @include media('max', 'sm') {
    .footer {
      height: 25rem;
    }
  }
</style>
