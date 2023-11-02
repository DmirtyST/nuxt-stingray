<template>
  <div class="header">
    <div class="header_row">
      <div @click="scrollToTop" class="header_logo">
        <nuxt-img
          format="webp"
          src="https://framerusercontent.com/images/WFrmt9q7h36nSYj2qLabIEg2cA.svg"
        />
      </div>

      <nav class="header_nav">
        <ul class="header_lists">
          <li v-for="(item, index) in navHeaderData" :key="index" class="header_list">
            <a
              :class="{active: item.active}"
              class="header_link"
              @click.prevent="scrollToSection(item.path.replace('#', ''))"
              :href="item.path"
              >{{ item.link }}</a
            >
          </li>
        </ul>
      </nav>

      <div
        @click="burgerMenuToggle"
        :class="
          burgerMenu === false
            ? 'header_burger-menu_controller'
            : 'header_burger-menu_controller active'
        "
      ></div>
      <div
        :class="
          burgerMenu === false
            ? 'header_burger-menu_menu'
            : 'header_burger-menu_menu active'
        "
      >
        <nav class="header_nav">
          <ul class="header_lists">
            <li v-for="(item, index) in navHeaderData" :key="index" class="header_list">
              <a
                :class="{active: item.active}"
                class="header_link"
                @click.prevent="scrollToSection(item.path.replace('#', ''))"
                :href="item.path"
                >{{ item.link }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const burgerMenu = ref(false);
  const burgerMenuToggle = () => {
    burgerMenu.value = !burgerMenu.value;
  };
  const rootMargin = ref('0% 0% 0% 0%');
  function setRootMargin() {
    if (window.innerWidth < 640) {
      rootMargin.value = '-60% 0px -40% 0px';
    } else {
      // Установите любые другие значения для более широких экранов
      rootMargin.value = '-50% 0px -40% 0px';
    }
  }
  const navHeaderData = ref([
    {path: '#about', link: 'About', active: false},
    {path: '#philosophy', link: 'Philosophy', active: false},
    {path: '#passion', link: 'Passion', active: false},
    {path: '#services', link: 'Services', active: false},
    {path: '#contact', link: 'Contact', active: false},
  ]);
  let observer;
  let lastScrollY = 0;
  onMounted(() => {
    setRootMargin();
    window.addEventListener('resize', setRootMargin);
    observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        lastScrollY = currentScrollY;

        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navItem = navHeaderData.value.find((item) => `#${id}` === item.path);
          if (navItem) {
            if (id === 'contact' && scrollingDown) {
              navItem.active = true;
            } else {
              navItem.active = entry.isIntersecting;
            }
          }
        });
      },
      {rootMargin: rootMargin.value},
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setRootMargin);
    if (observer) {
      observer.disconnect();
    }
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    gap: 1rem;
    padding: 2.6rem 0.2rem;
    color: white;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 9999;
    background: linear-gradient(180deg, #202226 0%, rgba(30, 32, 36, 0) 100%);
    &_row {
      @include flex(row, space-between, center);
      padding: 0 4rem;
    }
    &_burger-menu_controller {
      position: relative;
      z-index: 9999;
      display: none;
      width: 2.5rem;
      height: 1rem;

      cursor: pointer;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: #d7d7d9;
        transition: all ease 0.7s;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }

      &.active {
        &::before {
          top: 0.4rem;
          transform: rotate(-45deg);
        }
        &::after {
          bottom: 0.4rem;
          transform: rotate(45deg);
        }
      }
    }
    &_burger-menu_menu {
      display: none;
      overflow-y: auto; // Allows for vertical scrolling
      max-height: calc(100vh);
      padding-bottom: 2rem;
    }
    &_logo {
      width: 18rem;
      height: 1.9rem;
      position: relative;
      z-index: 9999;
      img {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &_lists {
      @include flex(row, flex-end);
      gap: 2.3rem;
    }

    &_link {
      @include font(1.8rem, 1.8rem, '', 400);
      color: #cacace;
      position: relative;
      padding-bottom: 0.4rem;
      transition: all ease 0.4s;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.1rem;
        background-color: #02fff0;
        transition: all ease 0.4s;
        opacity: 0;
        transition: all ease 0.4s;
      }
      &.active {
        color: white;
        transition: all ease 0.4s;
        &::before {
          opacity: 1;
          transition: all ease 0.4s;
        }
      }
    }
  }

  @include media('max', 'lg') {
    .header {
      &_row {
        @include flex(row, space-between);
        padding: 0 1.6rem;
      }
    }
  }
  @include media('max', 'sm') {
    .header {
      padding: 2.3rem 0.2rem;
      &_nav {
        display: none;
      }
      &_burger-menu_menu {
        display: block;
        position: fixed;
        padding-left: 1.6rem;
        padding-top: 6rem;
        height: 28rem;
        text-align: start;
        width: 100%;
        left: 0;
        top: 0;

        transform: translateY(-100%);
        backdrop-filter: blur(100px);
        background: linear-gradient(
          180deg,
          var(--token-7bedafc0-807a-4c42-a773-40a398d64ec7, rgb(32, 34, 38)) 0%,
          rgba(30, 32, 36, 0) 100%
        );

        visibility: hidden;
        transition: all ease 0.6s;
        z-index: 8888;
        .header_nav {
          display: block;

          opacity: 0;
          transition: all ease 0.4s;
        }
        .header_lists {
          @include flex(column);
          gap: 2rem;
        }
        .header_link {
          @include font(1.8rem, 1.8rem, '', 700);
        }
        &.active {
          transition: all linear 0.4s;
          transform: translateY(-0%);
          visibility: visible;
          .header_nav {
            opacity: 1;
            transition: all ease 0.4s;
          }
        }
      }
      &_burger-menu_controller {
        display: block;
      }
      &_logo {
        width: 16rem;
        height: 1.6rem;
      }
    }
  }
</style>
