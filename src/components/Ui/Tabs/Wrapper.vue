<template>
  <div class="tab">
    <div class="tab-nav">
      <span
        v-for="tab in names"
        :key="tab.name"
        :class="['tab-nav__item', {selected: tab.name === selectedTab}]"
        @click="selectedTab = tab.name"
        >{{ tab.label }}
      </span>
    </div>

    <div :class="['tab-content', {'fading-out': isFadingOut}]" :key="selectedTab">
      <slot :selectedTab="selectedTab" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    names: {
      type: Array,
      required: true,
    },
    initialSelectedTab: {
      type: String,
      default: '',
    },
  });

  const selectedTab = ref(
    props.initialSelectedTab || (props.names[0] && props.names[0].name),
  );
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    align-items: center;
    &-nav {
      display: block;
      align-items: center;
      margin-bottom: 0px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 7px;
        cursor: pointer;

        font-size: 1rem;
        &:hover {
          color: #3ec35d;
          transition: 0.2s;
        }
        &.selected {
          background: var(--primary);
          color: #c91d1d;
        }
      }
    }
    &-content {
      padding: 0px;
      border-radius: 7px;
      background: #fff;
      opacity: 0;
      animation: fadeIn 1.5s forwards;

      background-color: #3ec35d;
      &.fading-out {
        animation: fadeOut 2s forwards;
      }
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
    }
  }
</style>
