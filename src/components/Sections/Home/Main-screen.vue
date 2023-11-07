<template>
  <div id="home" class="main-screen">
    <div class="main-screen_row">
      <div class="main-screen_images-container">
        <div class="main-screen_image">
          <nuxt-img
            alt="slide-home"
            src="main-screen1"
            provider="cloudinary"
            format="webp"
          />
          <div class="main-screen_text-box">
            <div class="main-screen_title">Shaping future</div>
            <div class="main-screen_sub">Automotive design. Since 20 years.</div>
          </div>
        </div>

        <div class="main-screen_image">
          <nuxt-img
            alt="slide-home"
            provider="cloudinary"
            src="main-screen2"
            format="webp"
          />
        </div>
        <div class="main-screen_image">
          <nuxt-img
            alt="slide-home"
            provider="cloudinary"
            src="main-screen3"
            format="webp"
          />
        </div>
        <div class="main-screen_image">
          <nuxt-img
            alt="slide-home"
            provider="cloudinary"
            src="main-screen1"
            format="webp"
          />
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    let imagesElement = document.querySelectorAll('.main-screen_image');
    const aboutElement = document.querySelector('.about');
    let mm = gsap.matchMedia();
    // Анимация для .main-screen_images

    mm.add('(min-width: 992px)', () => {
      gsap.to(imagesElement, {
        x: '-150%',
        scrollTrigger: {
          trigger: imagesElement,
          scrub: 0.1,
          start: 'top top',
          end: () => `+=${window.innerHeight * 2.5}`,
        },
      });
      gsap.fromTo(
        aboutElement,
        {top: '100vh', opacity: 0}, // начальные значения
        {
          top: '5rem',
          opacity: 1,

          scrollTrigger: {
            trigger: '.main-screen',
            start: '20% top', // начать анимацию позже
            end: 'bottom center',
            scrub: 0.1,
          },
        },
      );
    });

    mm.add('(max-width: 992px)', () => {
      gsap.to(imagesElement, {
        y: '-220%',
        scrollTrigger: {
          trigger: '.main-screen',
          scrub: 0.3,
          start: 'top top',
          end: () => `+=${window.innerHeight * 3}`,
        },
      });
      gsap.fromTo(
        aboutElement,
        {yPercent: '100vh', opacity: 0}, // начальные значения
        {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: '.main-screen',
            start: '15% top',
            end: 'bottom center',
            scrub: 0.1,
          },
        },
      );
    });
    mm.add('(max-width: 576px)', () => {
      gsap.to(imagesElement, {
        y: '-200%',
        scrollTrigger: {
          trigger: '.main-screen',
          scrub: 0.4,
          start: 'top top',
          end: () => `+=${window.innerHeight * 3}`,
        },
      });
      gsap.fromTo(
        aboutElement,
        {yPercent: '100vh', opacity: 0}, // начальные значения
        {
          yPercent: '0vh',
          opacity: 1,
          scrollTrigger: {
            trigger: '.main-screen',
            start: '15% top',
            end: 'bottom center',
            scrub: 0.1,
          },
        },
      );
    });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style lang="scss" scoped>
  .main-screen {
    height: 300vh;
    position: relative;

    &_row {
      position: sticky;
      top: 0;
      height: 100vh;
    }
    &_text-box {
      left: 6rem;
      bottom: 11rem;
      color: white;
      position: absolute;
    }
    &_title {
      @include font(9.6rem, 9.6rem, -0.3rem, 600);
      margin-bottom: 2rem;
      font-family: 'Albert Sans Variable';
    }
    &_images-container {
      @include flex(row);
      gap: 3.2rem;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
    &_image {
      height: 100%;
      min-width: 102em;
      width: 102rem;
      overflow: hidden;
      position: relative;
      @include flex(column, flex-end, flex-start);
      z-index: 1;
      border-radius: 0.5rem;
      padding-bottom: 4rem;
      padding-top: 7.4rem;
      &:first-child {
        margin-left: 4rem;
      }
    }
    &_sub {
      @include font(2.2rem, 2.2rem, '', 400);
      opacity: 0.7;
    }
  }

  @include media('max', 'lg') {
    .main-screen {
      height: 240vh;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 30rem;
        width: 100%;
        background: linear-gradient(
          180deg,
          rgba(21, 22, 25, 0) 0%,
          rgba(21, 22, 25, 0.5) 37.42609797297297%,
          var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, rgb(21, 22, 25)) 100%
        );
        z-index: 1;
      }
      &_images-container {
        display: block;
        gap: 0rem;
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        padding-top: 7.4rem;
      }

      &_image {
        height: 100%;
        min-width: 100%;
        width: 100%;
        padding-bottom: 2rem;
        padding-top: 0rem;
        &:first-child {
          margin-left: 0rem;
        }
      }
      &_text-box {
        left: 4rem;
        bottom: 7rem;
      }
      &_title {
        @include font(7.6rem, 8.6rem, '', 600);
        margin-bottom: 2rem;
      }
    }
  }
  @include media('max', 'sm') {
    .main-screen {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 50rem;
        width: 100%;
        background: linear-gradient(
          180deg,
          rgba(21, 22, 25, 0) 0%,
          rgba(21, 22, 25, 0.5) 37.42609797297297%,
          var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, rgb(21, 22, 25)) 100%
        );
        z-index: 1;
      }
      height: 240vh;
      &_text-box {
        left: 1.5rem;
        bottom: 4rem;
      }
      &_images-container {
        display: block;
        gap: 0rem;
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        padding-top: 6rem;
      }
      &_row {
        position: sticky;
        top: 0;
        height: 120vh;
      }
      &_image {
        height: 56rem;
        padding-bottom: 1.6rem;
        padding-top: 0rem;
        &:first-child {
          margin-left: 0rem;
        }
      }
      &_title {
        @include font(4.6rem, 5.6rem, '', 600);
        margin-bottom: 1rem;
      }

      &_sub {
        @include font(1.8rem, 2.2rem, '', 400);
        opacity: 0.7;
      }
    }
  }
</style>
