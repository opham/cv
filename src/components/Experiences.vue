<template>
  <div class="experiences">
    <h2 class="mb-3">{{ $t('EXPERIENCES.TITLE') }}</h2>
    <section
      class="mb-3 page"
      v-for="(experience, index) in experiences"
      :key="`experience-${index}`"
    >
      <div class="card p-3">
        <div class="row mb-3">
          <div class="col-6">
            <div class="p-3 card d-flex flex-column justify-content-center">
              <h3 class="experience-title fw-bold d-flex align-items-center">
                <span class="material-icons">business</span
                ><span class="px-2">{{ experience.client }}</span>
              </h3>
              <span>{{ experience.period }}</span>
              <span>{{ experience.role }}</span>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 card d-flex flex-column justify-content-center">
              <h4 class="block-title fw-bold">
                {{ $t('EXPERIENCES.STRENGTHS') }}
              </h4>
              <ul>
                <li
                  v-for="(strength, index) in experience.missionStrengths"
                  :key="`mission-strength-${index}`"
                >
                  {{ strength }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="projects mb-3">
          <h4 class="block-title mb-3">{{ $t('EXPERIENCES.PROJECTS') }}</h4>
          <template
            v-for="(project, index) in experience.projects"
            :key="`project-${index}`"
          >
            <Project :projet="project" />
            <hr v-if="index < experience.projects.length - 1" />
          </template>
        </div>
        <div class="row g-3">
          <div class="col-12 col-lg-6">
            <h4 class="block-title fw-bold">
              {{ $t('EXPERIENCES.TASKS') }}
            </h4>
            <ul>
              <li
                v-for="(task, index) in experience.tasks"
                :key="`mission-task-${index}`"
              >
                {{ task }}
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-6">
            <h4 class="block-title fw-bold">
              {{ $t('EXPERIENCES.ENVIRONMENT_HIGHLIGHTS') }}
            </h4>
            <ul>
              <li
                v-for="(highlight, index) in experience.environmentHighlights"
                :key="`mission-highlight-${index}`"
              >
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Experience } from '@/classes';
import { defineComponent, PropType } from 'vue';
import Project from './Project.vue';

export default defineComponent({
  name: 'Experiences',
  components: {
    Project
  },
  props: {
    experiences: {
      type: Array as PropType<Array<Experience>>,
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
