<template>
  <section id="philosophy" class="philosophy">
    <UiContainer width="120">
      <div class="philosophy_row">
        <div class="philosophy_box">
          <div class="philosophy_item">
            <div class="philosophy_title section-title_xl">
              Each line tells a little story of movement
            </div>
            <div class="philosophy_img">
              <nuxt-img
                alt="philosophy-img"
                provider="cloudinary"
                class="philosophy_img-img"
                src="phylosophy1"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
          <div class="philosophy_item">
            <div class="philosophy_img">
              <nuxt-img
                alt="philosophy-img"
                provider="cloudinary"
                class="philosophy_img-img"
                src="phylosophy2"
                format="webp"
                loading="lazy"
              />
            </div>
            <div class="philosophy_text section-text_xl">
              Our ambition is to develop a design that is perfectly balanced between the
              present and the future. Combined with an extraordinary UI and UX that is
              planned down to the last detail, we create a coherent unit that attracts all
              eyes.
            </div>
          </div>
        </div>
        <div class="philosophy_box">
          <div class="philosophy_item">
            <div class="philosophy_title section-title_xl">
              <span>Emotion and functionality form a cohesive unit</span>
            </div>
            <div class="philosophy_img">
              <nuxt-img
                alt="philosophy-img"
                provider="cloudinary"
                class="philosophy_img-img"
                src="phylosophy3"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="philosophy_box">
          <div class="philosophy_item">
            <div class="philosophy_text section-text_xl">
              We know the challenge of creating a comprehensive and perfect car. For us,
              every design is a statement to the evolution of society. With over 20 years
              of experience in this field, we can offer you holistic know-how and
              perfectly defined workflows. Let´s shape the future of movement together.
            </div>
            <button class="philosophy_btn" ref="philosophyButton">Get in touch</button>
          </div>
          <div class="philosophy_item">
            <div class="philosophy_img">
              <nuxt-img
                alt="philosophy-img"
                provider="cloudinary"
                class="philosophy_img-img"
                src="phylosophy4"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <div class="philosophy_footer-img">
      <div class="philosophy_footer-item">
        <nuxt-img provider="cloudinary" loading="lazy" src="phylosophyFooters" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  const philosophyButton = ref(null);
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    const philosophyTexts = document.querySelectorAll('.philosophy_text');
    const philosophyImgs = document.querySelectorAll('.philosophy_img-img');
    const philosophyTitles = document.querySelectorAll('.philosophy_title');
    const philosophyBtns = document.querySelectorAll('.philosophy_btn');
    let mm = gsap.matchMedia();
    philosophyButton.value.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({behavior: 'smooth'});
      }
    });
    mm.add('(min-width: 992px)', () => {
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

      philosophyTitles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            yPercent: 40,
          },
          {
            yPercent: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: title,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 3,
            },
          },
        );
      });

      philosophyBtns.forEach((btn) => {
        gsap.fromTo(
          btn,
          {
            yPercent: 50,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: btn,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 3,
            },
          },
        );
      });
    });
    mm.add('(max-width: 992px)', () => {
      philosophyTexts.forEach((text) => {
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

      philosophyTitles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: title,
              start: '25% bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        );
      });

      philosophyBtns.forEach((btn) => {
        gsap.fromTo(
          btn,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: btn,
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
  .philosophy_text,
  .philosophy_img-img,
  .philosophy_title,
  .philosophy_btn {
    opacity: 1;
  }
  .philosophy {
    min-height: 100vh;
    padding-top: 10rem;
    background: linear-gradient(
      180deg,
      var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, #151619) 0%,
      rgba(28, 30, 33, 0) 28.872818130630627%
    );

    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      bottom: 63rem;
      left: 0;
      width: 100%;
      height: 100rem;
      z-index: -1;
      background: linear-gradient(
        180deg,
        rgba(28, 30, 33, 0) 0%,
        rgba(28, 30, 33, 0) 76.13%,
        #151619 100%
      );
    }

    &_item {
      width: calc(50%);
    }
    &_box {
      @include flex(row, space-between, '');
      gap: 3.2rem;

      &:first-child {
        margin-bottom: 10rem;
        .philosophy_item {
          &:first-child {
            .philosophy_title {
              max-width: 47rem;
            }
            .philosophy_img {
              height: 70rem;
            }
          }
          &:last-child {
            .philosophy_img {
              height: 45rem;
              margin-top: 5rem;
              margin-bottom: 6rem;
            }
            .philosophy_text {
              padding-right: 1rem;
            }
          }
        }
      }
      &:nth-child(even) {
        margin-bottom: 3.2rem;
        .philosophy_item {
          width: 100%;

          .philosophy_title {
            display: flex;
            justify-content: flex-end;
            span {
              width: 60rem;
            }
          }
          .philosophy_img {
            width: 83rem;
            height: 44rem;
          }
        }
      }
      &:last-child {
        margin-bottom: 8rem;
        gap: 5rem;

        .philosophy_item {
          &:first-child {
            .philosophy_text {
              margin-bottom: 5rem;
            }
          }

          &:last-child {
            .philosophy_img {
              width: 100%;
              height: 55rem;
            }
          }
        }
      }
    }
    &_title {
      margin-bottom: 7rem;
    }
    &_btn {
      color: #02ffef;
      @include font(2.3rem, 2.3rem, '', 700);
      cursor: pointer;
      position: relative;
      padding: 1.2rem 0;
      background: linear-gradient(
        90deg,
        rgba(42, 45, 50, 0) 0%,
        rgb(42, 45, 50) 48.9583%,
        rgba(42, 45, 50, 0) 100%
      );
      cursor: pointer;
      transition: all ease 0.4s;
      &:hover {
        transition: 0.5s ease;
        background: linear-gradient(
          90deg,
          rgba(42, 45, 50, 0) 0%,
          rgb(53, 56, 59) 48.9583%,
          rgba(42, 45, 50, 0) 100%
        );
        &::before,
        &::after {
          opacity: 0.6;
          transition: all ease 1s;
          height: 0.04rem;
        }
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.1rem;
        background-color: #02ffef;
        left: 0;
        transition: all ease 1s;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
    }
    &_footer-img {
      width: 100%;
      height: 63rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          #151619 2.76%,
          rgba(21, 22, 25, 0.91) 15.16%,
          rgba(21, 22, 25, 0.44) 27.23%,
          rgba(21, 22, 25, 0) 39.34%,
          rgba(21, 22, 25, 0) 72.52%,
          rgba(21, 22, 25, 0.71) 82.68%,
          #151619 96.65%
        );
      }
    }
    &_footer-item {
      width: 100%;
      height: 63rem;
    }
    &_img {
      width: 100%;
      border-radius: 1rem;
    }
  }
  @include media('max', 'lg') {
    .philosophy {
      padding-top: 8rem;
      &_box {
        &:nth-child(even) {
          margin-bottom: 3.2rem;
          .philosophy_item {
            .philosophy_title {
              display: flex;
              justify-content: center;
              text-align: center;
            }
            .philosophy_img {
              width: 100%;
              height: 44rem;
            }
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .philosophy_text,
    .philosophy_img-img,
    .philosophy_title,
    .philosophy_btn {
      opacity: 1;
    }
    .philosophy {
      padding-top: 2rem;
      &_item {
        width: calc(100%);
      }
      &_title {
        margin-bottom: 4rem;
      }
      &_box {
        display: block;

        &:first-child {
          margin-bottom: 10rem;
          .philosophy_item {
            &:first-child {
              .philosophy_title {
                max-width: 100%;
              }
              .philosophy_img {
                height: 42rem;
              }
            }
            &:last-child {
              .philosophy_img {
                height: 27rem;
                margin-top: 1.6rem;
                margin-bottom: 2.6rem;
              }
              .philosophy_text {
                padding-right: 1rem;
              }
            }
          }
        }
        &:nth-child(even) {
          margin-bottom: 1.6rem;
          .philosophy_item {
            width: 100%;

            .philosophy_title {
              display: flex;
              justify-content: flex-start;
              width: 100%;
              text-align: start;
            }
            .philosophy_img {
              height: 18rem;
            }
          }
        }
        &:last-child {
          margin-bottom: 8rem;
          gap: 2.6rem;
          @include flex(column-reverse, '', '');
          .philosophy_item {
            &:first-child {
              .philosophy_text {
                margin-bottom: 3.5rem;
              }
            }

            &:last-child {
              .philosophy_img {
                width: 100%;
                height: 33.2rem;
              }
            }
          }
        }
      }
      &_footer-img {
        width: 100%;
        height: 30rem;
        position: relative;
        &::after {
          content: '';
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(
            180deg,
            rgba(28, 30, 33, 0) 0%,
            rgba(28, 30, 33, 0) 76.1278856981982%,
            var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, rgb(21, 22, 25)) 100%
          );
        }
        &::before {
          background: linear-gradient(
            180deg,
            var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, #151619) 2.759009009009009%,
            rgba(21, 22, 25, 0.91) 15.160472972972974%,
            rgba(21, 22, 25, 0.44) 27.22585867117117%,
            rgba(21, 22, 25, 0) 39.335233671171174%,
            rgba(21, 22, 25, 0) 72.5242820945946%,
            rgba(21, 22, 25, 0.71) 82.68229166666667%,
            var(--token-112e39a7-c39e-403d-ae93-7e62c714a3f9, rgb(21, 22, 25))
              96.6480152027027%
          );
        }
      }
      &_footer-item {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
