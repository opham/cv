<template>
  <div class="project">
    <h5 class="mb-1 fw-bold">{{ projet.title }}</h5>
    <p>{{ projet.description }}</p>
  </div>
</template>

<script lang="ts">
import { Project } from '@/classes';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Project',
  props: {
    projet: {
      type: Project,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.experience-title {
  font-size: 1rem;
  color: $bs-gray;
}
</style>
