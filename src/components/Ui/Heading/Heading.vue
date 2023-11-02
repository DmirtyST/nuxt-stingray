<template>
  <div>
    <component
      :is="responsiveTextComponent"
      :tag="tag"
      :size="size"
      :font="font"
      :wg="wg"
      :sizeMd="sizeMd"
      :sizeSm="sizeSm"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script setup>
  import UiResponsiveText from '~~/src/components/Ui/ResponsiveText/ResponsiveText.vue';
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
  });
  const responsiveTextComponent = computed(() => {
    return UiResponsiveText;
  });
  const textAttributes = {
    xl: {
      tag: 'h1',
      size: '4',
      sizeMd: '3',
      sizeSm: '2',
      wg: 400,
      font: 'Roboto',
    },
    sm: {
      tag: 'h5',
      size: '2',
      sizeMd: '1.6',
      sizeSm: '1.3',
      wg: 400,
    },
    // Добавьте другие вариации здесь
  };
  const currentTextAttributes = computed(() => textAttributes[props.size]);
  const {
    tag,
    size,
    sizeMd,
    sizeSm,
    wg,
    wgMd,
    wgSm,
    spacing,
    spacingMd,
    spacingSm,
    font,
  } = computed(() => {
    return currentTextAttributes.value;
  }).value;
</script>

<style lang="scss" scoped></style>
