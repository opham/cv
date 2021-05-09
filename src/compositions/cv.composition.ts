import { Experience, Profile } from '@/classes';
import { IExperience } from '@/interfaces';
import { ref } from 'vue';
import data from '@/assets/json/cv-content.json';

// eslint-disable-next-line
export function cvComposition() {
  const profile = ref<Profile>();
  const experiences = ref<Experience[]>([]);

  profile.value = new Profile(data.profile);
  experiences.value = data.experiences.map(
    (exp: IExperience) => new Experience(exp)
  );

  return { profile, experiences };
}
