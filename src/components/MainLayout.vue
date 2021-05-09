<template>
  <div class="main-layout d-flex flex-column flex-fill">
    <header class="p-3">
      <h1 class="m-0 d-flex justify-content-between align-items-center">
        <span
          class="p-1 initials d-flex align-items-center justify-content-center"
          title="Olivier Pham Dang"
          >{{ profile.initials }}</span
        >
        <span class="ml-3">{{ profile.title }}</span>
      </h1>
    </header>
    <main class="flex-fill">
      <div class="container px-3">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { cvComposition } from '@/compositions';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const { profile } = cvComposition();

    return { profile };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/variables';
.main-layout {
  header {
    color: rgba(255, 255, 255, 0.7);

    .initials {
      background: $bs-gray;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
}
</style>
