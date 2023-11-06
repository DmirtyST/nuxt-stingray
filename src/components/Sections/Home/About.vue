<template>
  <section id="about" class="about">
    <div class="about_text-box">
      <div class="about_text">
        <div class="about_heading">who we are</div>
        <div class="about_title">
          We are a collective of designers and engineers specialised in automotive design.
          We create innovative, creative and sustainable concepts for the automotive
          industry.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
  .about {
    top: 0;
    width: 100%;
    z-index: 2;
    height: 100vh;
    position: sticky;

    &_text-box {
      background: linear-gradient(
        180deg,
        rgba(21, 22, 25, 0) 0%,
        rgba(21, 22, 25, 0.5) 37.42609797297297%,
        var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, rgb(21, 22, 25)) 100%
      );
      height: 100%;
      width: 100%;
      color: white;
      @include flex(column, center, center);
      text-align: center;
      padding: 0 1.5rem;
    }

    &_text {
      width: 100rem;
      font-family: 'Albert Sans Variable', sans-serif;
    }

    &_heading {
      @include font(1.6rem, 1.6rem, '', 600);
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    &_title {
      @include font(6.4rem, 7rem, '', 600);
    }
  }
  @include media('max', 'lg') {
    .about {
      &_heading {
        @include font(1.6rem, 1.6rem, '', 600);
        margin-bottom: 2rem;
      }
      &_text {
        padding: 0 1.6rem;
        padding-top: 20rem;
        width: 75rem;
      }
      &_title {
        @include font(3.5rem, 4rem, '', 600);
      }
    }
  }

  @include media('max', 'sm') {
    .about {
      top: 70rem;
      width: 100%;
      z-index: 2;
      height: 50vh;

      &_text-box {
        @include flex(column, flex-start, flex-start);
      }

      position: sticky;
      &_heading {
        @include font(1.4rem, 1.6rem, '', 600);
        margin-bottom: 1rem;
      }
      &_text {
        padding: 0 1.6rem;
        padding-top: 0rem;
        width: 100%;
      }
      &_title {
        @include font(3.2rem, 3.7rem, '', 600);
      }
    }
  }
</style>
