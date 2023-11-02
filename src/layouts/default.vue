<template>
  <div class="wrapper">
    <AppHeader />
    <main class="page">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .page {
    flex: 1 1 auto;
  }
</style>
