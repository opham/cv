<template>
  <div class="cv">
    <Profile :profile="profile" />
    <Experiences class="mt-3" :experiences="experiences" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cvComposition } from '@/compositions';
import Profile from './Profile.vue';
import Experiences from './Experiences.vue';

export default defineComponent({
  name: 'CurriculumVitae',
  components: {
    Profile,
    Experiences
  },
  setup() {
    const { profile, experiences } = cvComposition();
    return { profile, experiences };
  }
});
</script>
