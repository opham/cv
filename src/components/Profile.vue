<template>
  <div class="profile page">
    <h2 class="mb-3">{{ $t('PROFILE.TITLE') }}</h2>
    <section class="row mb-3">
      <div class="col-5">
        <div class="card p-3 d-flex flex-column">
          <h3 class="mb-2 d-flex align-items-center">
            <span class="material-icons">face</span
            ><strong class="px-2">{{ profile.fullName }}</strong>
          </h3>
          <span>{{ profile.formattedBirthDate }}</span>
          <span>{{
            $t('PROFILE.YEARS_OF_EXPERIENCE', {
              years: profile.yearsOfExperience
            })
          }}</span>
          <a
            class="github-link mt-3 d-inline-flex align-items-center"
            target="_blank"
            href="https://github.com/opham/cv"
            ><img
              class="me-2"
              src="../assets/img/github-logo.png"
              alt="github"
            />
            <span>https://github.com/opham/cv</span></a
          >
        </div>
      </div>
      <div class="col-7">
        <div class="card p-3 d-flex flex-column">
          <h3 class="block-title mb-2">{{ $t('PROFILE.STRENGTHS') }}</h3>
          <ul>
            <li
              v-for="(strength, index) in profile.strengths"
              :key="`strength-${index}`"
            >
              {{ strength }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="mb-3">
      <div class="card p-3 d-flex flex-column">
        <h3 class="block-title mb-2">{{ $t('PROFILE.SKILLS') }}</h3>
        <div class="row">
          <div class="col-3 fw-bold">
            {{ $t('COMMONS.SECTORS') }}
          </div>
          <div class="col-9">
            {{ profile.skills.sectors.join(' - ') }}
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col-3 fw-bold">
            {{ $t('COMMONS.LANGUAGES') }}
          </div>
          <div class="col-9 fw-bold">
            {{ profile.skills.languages.join(', ') }}
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col-3 fw-bold">
            {{ $t('COMMONS.OS') }}
          </div>
          <div class="col-9">
            {{ profile.skills.operatingSystems.join(', ') }}
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col-3 fw-bold">
            {{ $t('COMMONS.FUNCTIONAL_SKILLS') }}
          </div>
          <div class="col-9">
            {{ profile.skills.functionalSkills.join(', ') }}
          </div>
        </div>
        <hr class="my-2" />
        <div class="row">
          <div class="col-3 fw-bold">
            {{ $t('COMMONS.METHODOLOGIES') }}
          </div>
          <div class="col-9">
            {{ profile.skills.methodologies.join(', ') }}
          </div>
        </div>
      </div>
    </section>
    <section class="row mb-3">
      <div class="col-12">
        <div class="card p-3 d-flex flex-column">
          <h3 class="block-title mb-2">{{ $t('PROFILE.DIPLOMAS') }}</h3>
          <div
            class="row g-2"
            v-for="(diploma, index) in profile.diplomas"
            :key="`diplomas-${index}`"
          >
            <div class="col-2 fw-bold">{{ diploma.year }}:</div>
            <div class="col-10">{{ diploma.title }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="row mb-3">
      <div class="col-8">
        <div class="card p-3 d-flex flex-column">
          <h3 class="block-title mb-2">{{ $t('PROFILE.CERTIFICATIONS') }}</h3>
          <div
            class="row g-2"
            v-for="(certification, index) in profile.certifications"
            :key="`certifications-${index}`"
          >
            <div class="col-5 fw-bold">{{ certification.name }}:</div>
            <div class="col-7">{{ certification.grade }}</div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card p-3 d-flex flex-column">
          <h3 class="block-title mb-2">{{ $t('PROFILE.SPOKEN_LANGUAGES') }}</h3>
          <ul>
            <li
              v-for="(spokenLanguage, index) in profile.spokenLanguages"
              :key="`spoken-languages-${index}`"
            >
              {{ spokenLanguage }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <div class="card p-3 d-flex flex-column">
          <h3 class="block-title mb-2">{{ $t('PROFILE.HOBBIES') }}</h3>
          <ul>
            <li
              v-for="(hobbie, index) in profile.hobbies"
              :key="`hobbie-${index}`"
            >
              {{ hobbie }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="github-link mb-3"></div>
  </div>
</template>

<script lang="ts">
import { Profile } from '@/classes';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile',
  props: {
    profile: {
      type: Profile,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

a.github-link {
  text-decoration: none;
  color: $bs-dark;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
