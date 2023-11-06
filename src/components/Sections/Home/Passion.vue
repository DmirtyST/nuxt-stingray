<template>
  <section id="passion" class="passion">
    <UiContainer width="120">
      <div class="passion_titles">
        <div class="passion_title section-title_xl">
          Inspired by life, driven by passion and made with a lot of emotion
        </div>
        <div class="passion_sub section-text_xl">
          We at Stingray only have cars on our minds
        </div>
      </div>
      <div class="passion_main-box"></div>
      <div class="passion_image main animate-image">
        <nuxt-img
          src="https://framerusercontent.com/images/BRRHtrcfrtIsfLgEdZdG1SPE1g.webp"
          format="webp"
        />
      </div>
      <div class="passion_row">
        <div class="passion_item">
          <div class="passion_text section-text_xl">
            <div class="passion_card card-top">
              <div class="passion_card-profile">
                <div class="passion_image sub-profile">
                  <nuxt-img
                    src="https://framerusercontent.com/images/mFCImjTs377UOvcsiEGeptv8OzQ.png"
                    format="webp"
                  />
                </div>
              </div>
              <div class="passion_card-title">
                “Our ambition is nothing less than the pure symphony of perfection.”
              </div>
              <div class="passion_card-sub">John Doe, lead designer at Stingray</div>
            </div>
            <p>
              Every little detail from life, how people behave, how they deal with things,
              can be a key element of enrichment for the designprocess. We know about the
              inexhaustible variety of daily inspirations around us. We step out of the
              familiar environment to be able to create something new and innovative.
            </p>
          </div>
          <div class="passion_box-top">
            <div class="passion_image sub-left animate-image">
              <nuxt-img
                src="https://framerusercontent.com/images/qJRVGAioDZ5rVA8rFbOZy65BM.webp"
                format="webp"
              />
            </div>
          </div>
        </div>
        <div class="passion_item">
          <div class="passion_card card-bottom">
            <div class="passion_card-profile">
              <div class="passion_image sub-profile">
                <nuxt-img
                  src="https://framerusercontent.com/images/mFCImjTs377UOvcsiEGeptv8OzQ.png"
                  format="webp"
                />
              </div>
            </div>
            <div class="passion_card-title">
              “Our ambition is nothing less than the pure symphony of perfection.”
            </div>
            <div class="passion_card-sub">John Doe, lead designer at Stingray</div>
          </div>

          <div class="passion_image sub-right">
            <nuxt-img src="passion-right.png" format="webp" />
          </div>
        </div>
      </div>
      <div class="passion_stats">
        <div
          class="passion_stats-item"
          v-for="(item, index) in passioStatsItems"
          :key="index"
        >
          <div class="passion_stats-title">{{ item.title }}</div>
          <div class="passion_stats-count">{{ item.count }}</div>
          <div class="passion_stats-text">{{ item.text }}</div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const passioStatsItems = [
    {
      title: 'years experience',
      text:
        'In many years we have been able to gather extensive know-how and improve our skills',
      count: '20+',
    },
    {
      title: 'projects finished',
      text:
        'We are proud of many completed projects and a lot of satisfied and happy clients',
      count: '100+',
    },
    {
      title: 'Designers & Enigneers',
      text:
        'Our company is packed with specialists who are looking forward to working with you',
      count: '42',
    },
    {
      title: 'competent teams',
      text:
        'We have 12 excellent separate teams - each can handle a whole large-scale project',
      count: '12',
    },
  ];
  onMounted(() => {
    const philosophyTexts = document.querySelectorAll('.passion_text');
    const philosophyImgs = document.querySelectorAll('.animate-image');
    const philosophyStats = document.querySelectorAll('.passion_stats-item');
    const philosophyCard = document.querySelectorAll('.passion_card');
    let mm = gsap.matchMedia();
    mm.add('(min-width: 992px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.passion_titles', // Вы можете заменить это на нужный вам триггер
          start: 'top bottom',
          end: 'top 70%',
          scrub: 3,
        },
      });
      const combinedElementsTitles = [
        ...document.querySelectorAll('.passion_title, .passion_sub'),
      ];
      combinedElementsTitles.forEach((element) => {
        const isSub = element.classList.contains('passion_sub');

        tl.fromTo(
          element,
          {
            opacity: 0,
            yPercent: isSub ? 60 : 40,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5, // Продолжительность анимации, можете настроить под себя
          },
        );
      });
      philosophyTexts.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            yPercent: 40,
          },
          {
            opacity: 1,
            yPercent: 0,
            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 3,
            },
          },
        );
      });
      philosophyCard.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            scale: 1,
            opacity: 1,

            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 3,
            },
          },
        );
      });
      philosophyStats.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,

            scaleY: 0.9,
          },
          {
            opacity: 1,

            scaleY: 1,
            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'top 60%',
              scrub: 2,
            },
          },
        );
      });
      philosophyImgs.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            scaleY: 0.9,
          },
          {
            opacity: 1,
            scaleY: 1,
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 3,
            },
          },
        );
      });
    });
    mm.add('(max-width: 992px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.passion_titles', // Вы можете заменить это на нужный вам триггер
          start: '25% bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      const combinedElementsTitles = [
        ...document.querySelectorAll('.passion_title, .passion_sub'),
      ];
      combinedElementsTitles.forEach((element) => {
        const isSub = element.classList.contains('passion_sub');

        tl.fromTo(
          element,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.7,
          },
        );
      });
      philosophyTexts.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            yPercent: 0,
          },
          {
            opacity: 1,

            scrollTrigger: {
              trigger: text,
              start: '25% bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        );
      });
      philosophyCard.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
          },
          {
            opacity: 1,

            scrollTrigger: {
              trigger: text,
              start: '25% bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        );
      });
      philosophyStats.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
          },
          {
            opacity: 1,

            scrollTrigger: {
              trigger: text,
              start: '25% bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        );
      });
      philosophyImgs.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: img,
              start: '25% bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        );
      });
    });
  });
</script>

<style lang="scss" scoped>
  .passion_text,
  .animate-image,
  .passion_title,
  .passion_sub,
  .passion_stats-item {
    opacity: 0;
  }

  .passion {
    min-height: 100vh;
    padding-top: 10rem;
    margin-bottom: 10rem;
    background: linear-gradient(
      180deg,
      #151619 0%,
      rgba(32, 34, 38, 0) 21.64%,
      rgba(28, 30, 33, 0) 100%
    );

    &_titles {
      text-align: center;
      width: 75rem;
      margin: 0 auto;
      margin-bottom: 10rem;
    }

    &_title {
      margin-bottom: 2rem;
    }

    &_row {
      @include flex(row, space-between, '');
      gap: 3.2rem;
    }

    &_item {
      &:first-child {
        width: 68rem;
      }
      &:last-child {
        flex: 1;
        max-width: 48rem;
        position: relative;
        bottom: 45rem;
      }
    }

    &_text {
      margin-bottom: 8.5rem;
    }

    &_card {
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
      background-color: rgba(21, 22, 25, 0.7019607843);
      width: 100%;
      height: 45rem;
      border-radius: 1rem;
      @include flex(column, center, center);
      text-align: center;
      padding: 2rem 5rem;
      margin-bottom: 3.2rem;

      &.card-top {
        display: none;
      }
    }

    &_card-profile {
      margin-bottom: 4rem;
    }

    &_card-title {
      color: #fff;
      @include font(3rem, 3.8rem, '', 600);
      font-family: 'Albert Sans Variable';
      margin-bottom: 2rem;
    }

    &_card-sub {
      color: #cacace;
      text-align: center;
      @include font(1.8rem, 1.8rem, '', 400);
    }

    &_image {
      border-radius: 0.5rem;
      &.main {
        width: 96rem;
        height: 63rem;
        margin-bottom: 10rem;
      }

      &.sub-left {
        height: 54rem;
        width: 100%;
      }
      &.sub-right {
        width: 100%;
        height: 45rem;
      }
      &.sub-profile {
        width: 9.6rem;
        height: 9.6rem;
        border-radius: 50%;
      }
    }
    &_stats {
      @include flex(row, space-between, '');
      gap: 4.6rem;
    }

    &_stats-item {
      text-align: center;
      width: calc(25% - 4.6rem);
    }

    &_stats-title {
      color: #86888c;
      @include font(1.8rem, 1.6rem, '', 900);
      text-transform: uppercase;
      margin-bottom: 3rem;
    }

    &_stats-count {
      @include font(9rem, 9rem, '', 700);
      font-family: 'Albert Sans Variable';
      margin-bottom: 2.5rem;
      color: white;
    }

    &_stats-text {
      color: #86888c;
      @include font(1.6rem, 2.4rem, '', 400);
    }
  }

  @include media('max', 'lg') {
    .passion_text,
    .animate-image,
    .passion_title,
    .passion_sub,
    .passion_stats-item {
      opacity: 1;
    }
    .passion {
      min-height: 100vh;
      padding-top: 5rem;
      margin-bottom: 2rem;

      &_titles {
        width: 100%;
        margin-bottom: 5rem;
      }

      &_row {
        @include flex(column, space-between, '');
        gap: 2rem;
        margin-bottom: 5rem;
      }

      &_item {
        &:first-child {
          width: 100%;
        }
        &:last-child {
          flex: 1;
          max-width: 100%;
          position: static;
          bottom: 0;
        }
      }

      &_text {
        margin-bottom: 4rem;
      }
      &_box-top {
        display: block;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 50rem;
        gap: 2rem;
      }
      &_card {
        &.card-top {
          @include flex(column, center, center);
          height: 100%;
          margin-bottom: 3rem;
          padding: 5rem;
        }
        &.card-bottom {
          display: none;
        }
      }

      &_card-profile {
        margin-bottom: 4rem;
      }

      &_card-title {
        color: #fff;
        @include font(3rem, 3.8rem, '', 600);
        font-family: 'Albert Sans Variable';
        margin-bottom: 2rem;
      }

      &_card-sub {
        color: #cacace;
        text-align: center;
        @include font(1.8rem, 1.8rem, '', 400);
      }

      &_image {
        border-radius: 1rem;
        &.main {
          width: 100%;
          height: 63rem;
          margin-bottom: 3rem;
        }

        &.sub-left {
          height: 100%;
          width: 100%;
        }
        &.sub-right {
          width: 100%;
          height: 45rem;
        }
      }
      &_stats {
        flex-wrap: wrap;
        gap: 2rem;
      }

      &_stats-item {
        text-align: center;
        width: calc(50% - 2rem);
      }

      &_stats-title {
        color: #86888c;
        @include font(1.8rem, 1.6rem, '', 900);
        text-transform: uppercase;
        margin-bottom: 3rem;
      }

      &_stats-count {
        @include font(9rem, 9rem, '', 700);
        font-family: 'Albert Sans Variable';
        margin-bottom: 2.5rem;
        color: white;
      }

      &_stats-text {
        color: #86888c;
        @include font(1.6rem, 2.4rem, '', 400);
      }
    }
  }
  @include media('max', 'sm') {
    .passion {
      &_row {
        gap: 1.6rem;
      }
      &_image {
        border-radius: 1rem;

        &.main {
          height: 23rem;
          margin-bottom: 1.6rem;
        }
        &.sub-left,
        &.sub-right {
          height: 27rem;
        }
      }

      &_card {
        &.card-top {
          margin-bottom: 3.2rem;
          height: 37rem;
          padding: 5rem 2rem;
        }
      }
      &_text {
        margin-bottom: 3.2rem;
      }
      &_card-profile {
        margin-bottom: 3.5rem;
      }

      &_card-title {
        color: #fff;
        @include font(2.3rem, 2.8rem, '', 600);
        margin-bottom: 2rem;
      }

      &_card-sub {
        @include font(1.6rem, 1.6rem, '', 400);
      }
      &_box-top {
        @include flex(column-reverse);
        width: 100%;
        height: auto;
        gap: 2rem;
      }

      &_stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr;
        gap: 5rem;
      }

      &_stats-item {
        text-align: start;
        width: 100%;
      }

      &_stats-title {
        color: #86888c;
        @include font(1.2rem, 1.4rem, '', 900);
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      &_stats-count {
        @include font(4rem, 4rem, '', 700);
        font-family: 'Albert Sans Variable';
        margin-bottom: 2rem;
        color: white;
      }

      &_stats-text {
        color: #86888c;
        @include font(1.4rem, 2.1rem, '', 400);
      }
    }
  }
</style>
