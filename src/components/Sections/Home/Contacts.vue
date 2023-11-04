<template>
  <section id="contact" class="contacts">
    <div class="contacts_title section-title_xl">
      Let´s shape the future of movement together
    </div>
    <UiContainer width="120">
      <div class="contacts_row">
        <div class="contacts_item">
          <div class="contacts_item-profile">
            <nuxt-img
              src="https://framerusercontent.com/images/arrTZ6Og22T7mdW4y7NgDSuwXA.png"
            />
          </div>
          <div class="contacts_item-title">Your personal support at any time</div>
          <div class="contacts_item-sub">Jane doe, customer service</div>
          <ul class="contacts_item-links">
            <li class="contacts_item-list">
              <span>Phone:</span>
              <a class="contacts_item-link" href="#2">+123 4567 8910</a>
            </li>
            <li class="contacts_item-list">
              <span>Email:</span>
              <a class="contacts_item-link" href="#2">support@stingray.temp</a>
            </li>
          </ul>
        </div>
        <div class="contacts_item">
          <div class="contacts_item-content">
            <div class="contacts_item-title">Stingray</div>
            <div class="contacts_item-sub">5318 Framer Parkway Dawnberg, Arizona</div>
            <ul class="contacts_item-links">
              <li class="contacts_item-list">
                <span>Phone:</span>
                <a class="contacts_item-link" href="#2">+123 4567 8910</a>
              </li>
              <li class="contacts_item-list">
                <span>Email:</span>
                <a class="contacts_item-link" href="#2">support@stingray.temp</a>
              </li>
            </ul>
          </div>
          <div class="contacts_map">
            <LMap ref="map" :zoom="zoom" :center="centerCoordinates">
              <LTileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="markerCoordinates" />
            </LMap>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const zoom = ref(15);
  const centerCoordinates = [50.004444, 36.231389]; // Пример координат для Харькова
  const markerCoordinates = [50.004444, 36.231389];

  onMounted(() => {
    const philosophyTitle = document.querySelectorAll('.contacts_title');
    const philosophyRows = document.querySelectorAll('.contacts_row');
    let mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      philosophyTitle.forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            yPercent: 30,
          },
          {
            yPercent: 0,
            opacity: 1,

            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'top 60%',
              scrub: 3,
            },
          },
        );
      });
      philosophyRows.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'top 30%',
              scrub: 4,
            },
          },
        );
      });
    });
    mm.add('(max-width: 992px)', () => {
      philosophyTitle.forEach((text) => {
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
      philosophyRows.forEach((img) => {
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
  .contacts_row,
  .contacts_title {
    opacity: 0;
  }
  .contacts {
    background: linear-gradient(180deg, rgba(28, 30, 33, 0) 0%, rgba(0, 0, 0, 1) 100%);
    padding-bottom: 4rem;
    padding-top: 10rem;
    &_title {
      margin: 0 auto;
      text-align: center;
      margin-bottom: 5rem;
      width: 54rem;
    }

    &_row {
      @include flex(row);
      gap: 3.2rem;
      height: 50rem;
    }

    &_item {
      height: 100%;
      text-align: center;
      border-radius: 0.5rem;
      background: #202226;
      @include flex(column, center, center);

      &:first-child {
        width: 38rem;
        padding: 1rem 4.5rem;
      }
      &:last-child {
        flex-grow: 1;
        @include flex(row);
      }
    }

    &_item-profile {
      width: 9.6rem;
      height: 9.6rem;
      border-radius: 50%;
      margin-bottom: 4rem;
    }

    &_item-title {
      color: #fff;
      @include font(3rem, 3.8rem, '', 600);
      margin-bottom: 1.8rem;
    }

    &_item-sub {
      color: #cacace;
      @include font(1.8rem, 2.7rem, '', 400);
      margin-bottom: 3.7rem;
    }

    &_item-links {
      @include flex(column, center, center);
      gap: 1.7rem;
    }

    &_item-list {
      @include flex(row);
      gap: 0.3rem;
      @include font(1.8rem, 1.8rem, '', 400);
      span {
        color: #cacace;
      }
    }

    &_item-link {
      color: #02fff0;
      @include font(1.8rem, 1.8rem, '', 400);
    }

    &_map {
      width: 50%;
      height: 100%;
    }
    &_item-content {
      width: 50%;
      padding: 1rem 7rem;
    }
  }

  @include media('max', 'lg') {
    .contacts {
      &_row {
        @include flex(column);
        gap: 2.2rem;
        height: auto;
      }
      &_item {
        height: 100%;
        text-align: center;
        border-radius: 0.5rem;
        background: #202226;
        @include flex(column, center, center);

        &:first-child {
          width: 100%;
          min-height: 42rem;
          padding: 1rem 3.5rem;
        }
        &:last-child {
          flex-grow: 1;
          @include flex(column-reverse);
          height: auto;
        }
      }
      &_map {
        width: 100%;
        height: 20rem;
      }
      &_item-content {
        width: 100%;
        padding: 1rem 7rem;
        height: 30rem;
        @include flex(column, center, center);
      }
    }
  }

  @include media('max', 'sm') {
    .contacts {
      padding-top: 8rem;
      &_title {
        margin-bottom: 4rem;
        width: auto;
        max-width: 36rem;
      }

      &_item-title {
        color: #fff;
        @include font(2.3rem, 2.8rem, '', 600);
        margin-bottom: 1.8rem;
      }

      &_item-sub {
        color: #cacace;
        @include font(1.6rem, 2.4rem, '', 400);
        margin-bottom: 3.7rem;
      }

      &_item-list {
        @include font(1.6rem, 1.6rem, '', 400);
      }

      &_item-link {
        @include font(1.6rem, 1.6rem, '', 400);
      }
    }
  }
</style>
