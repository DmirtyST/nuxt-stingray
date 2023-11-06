<template>
  <section id="services" class="services">
    <UiContainer width="120">
      <div class="services_title section-title_xl">
        We create an inseparable unit of interior and exterior
      </div>
      <div class="services_row">
        <div class="services_accordions">
          <div
            v-for="(item, index) in servicesAccrodion"
            :key="index"
            class="services_accordion"
          >
            <UiAccordion
              v-model="item.isOpen"
              :defaultOpen="index === 0"
              @update:modelValue="(value) => handleAccordionChange(index, value)"
              section="servicesAccordion"
            >
              <template v-slot:title>
                <div :class="['services_accordion-title', item.isOpen ? 'active' : '']">
                  {{ item.title }}
                </div>
              </template>
              <div class="services_accordion-text">{{ item.text }}</div>
            </UiAccordion>
          </div>
        </div>
        <div class="services_accordions-images">
          <nuxt-img
            alt="servicesTab-img"
            provider="cloudinary"
            format="webp"
            v-for="(image, index) in servicesImages"
            :key="index"
            :src="image"
            :class="{active: activeImageIndex === index}"
          />
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const activeImageIndex = ref(0);
  let mm = gsap.matchMedia();
  const handleAccordionChange = (index, newValue) => {
    if (newValue) {
      activeImageIndex.value = index;
    }
  };
  const servicesAccrodion = [
    {
      title: 'Analysis',
      text:
        'Our specialists start with a comprehensive and thorough analysis combined with extensive interviews to gather any information',
    },
    {
      title: 'Styling',
      text:
        'Concept development, definition of the design language and a deeper research, style sketches, renderings, colour & trim up to UI & UX.',
    },
    {
      title: 'Surface Modeling',
      text:
        'We offer Cas and Cad modelling, A class surfacing and 3D renderings as well as high quality VR presentations.',
    },
    {
      title: 'Prototypes',
      text:
        'From traditional clay models to scale models, prototypes and show cars. Whatever the project needs, we are  ready.',
    },
  ];
  const servicesImages = ['service-tab1', 'service-tab2', 'service-tab3', 'service-tab4'];

  onMounted(() => {
    const servicesTitle = document.querySelectorAll('.services_title');
    const servicesyRows = document.querySelectorAll('.services_row');

    mm.add('(min-width: 992px)', () => {
      servicesTitle.forEach((text) => {
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
      servicesyRows.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scale: 1,

            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
              end: 'top 10%',
              scrub: 4,
            },
          },
        );
      });
    });
    mm.add('(max-width: 992px)', () => {
      servicesTitle.forEach((text) => {
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
      servicesyRows.forEach((text) => {
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
    });
  });
</script>

<style lang="scss" scoped>
  /* Для анимации появления */

  .services_title,
  .services_row {
    opacity: 1;
  }
  .services {
    padding-top: 10rem;
    margin-bottom: 10rem;

    &_title {
      margin: 0 auto;
      width: 66rem;
      text-align: center;
      margin-bottom: 9rem;
    }
    &_row {
      @include flex(row, '', '');
      gap: 3.4rem;
    }

    &_accordions {
      width: 40rem;
    }
    &_accordion {
      width: 100%;
      border-bottom: 1px solid rgb(53, 56, 63);
    }

    &_accordion-title {
      text-align: start;
      padding-top: 1.8rem;
      padding-bottom: 3.3rem;
      @include font(3rem, 3rem, '', 600);
      color: #5d6065;
      cursor: pointer;
      transition: all ease 0.4s;
      &.active {
        color: white;
        transition: all ease 0.4s;
      }
    }

    &_accordion-text {
      @include font(1.7rem, 2.7rem, '', 400);
      color: #cacace;
      padding-bottom: 3.5rem;
    }

    &_accordions-images {
      flex-grow: 1;
      height: 50rem;
      border-radius: 0.6rem;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 1.3s ease-in-out;
        width: 100%;
        height: 100%;
        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @include media('max', 'lg') {
    .services {
      padding-top: 10rem;
      margin-bottom: 3rem;

      &_title {
        margin: 0 auto;
        width: 66rem;
        text-align: center;
        margin-bottom: 7rem;
      }
      &_row {
        display: block;
        gap: 0rem;
      }

      &_accordions {
        width: 100%;
      }
      &_accordion {
        width: 100%;
        border-bottom: 1px solid rgb(53, 56, 63);
        &:last-child {
          border-bottom: none;
        }
      }

      &_accordion-title {
        text-align: start;
        padding-top: 1.5rem;
        padding-bottom: 3rem;
        @include font(2.5rem, 2.5rem, '', 600);
      }

      &_accordion-text {
        @include font(1.7rem, 2.7rem, '', 400);
        padding-bottom: 2.5rem;
      }
    }
  }
  @include media('max', 'sm') {
    .services {
      padding-top: 8rem;
      &_row {
        @include flex(column-reverse);
        gap: 2rem;
      }
      &_accordions-images {
        height: 25rem;
      }
      &_title {
        width: auto;
        max-width: 28rem;
        margin-bottom: 4rem;
      }
    }
  }
</style>
