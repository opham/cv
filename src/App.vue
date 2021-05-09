<template>
  <main-layout>
    <curriculum-vitae />
  </main-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from './components/MainLayout.vue';
import CurriculumVitae from './components/CurriculumVitae.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    CurriculumVitae
  }
});
</script>

<style lang="scss">
@import './assets/scss/variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 1;
  display: flex;
  flex-flow: column;
  background: $bs-gray-dark;
}
</style>
