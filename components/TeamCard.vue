<template>
  <div class="card">
    <div class="flex flex-col items-left">
      <div class="img pt-3 px-3">
        <img :src="`/img/team/${image}`">
      </div>
      <div class="flex flex-row justify-between gap-0 ml-4 mr-3">
        <div class="text-xl font-bold">
          {{ name }}
        </div>
        <div class="flex flex-row justify-left items-center">
          <a v-if="twitter !== ''" :href="twitter" target="_blank" class="hover:text-so-blue">
            <Icon name="fa6-brands:x-twitter" :class="[linkedin !== '' ? 'mr-3' : '']" />
          </a>
          <a v-if="linkedin !== ''" :href="linkedin" target="_blank" class="hover:text-so-blue">
            <Icon name="fa6-brands:linkedin" />
          </a>
        </div>
      </div>
      <div v-if="org !== ''" class="text-md mx-4">
        {{ org }}
      </div>
      <div class="text-md mx-4">
        {{ role }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    org: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="postcss">
@reference "../assets/css/tailwind.css";
.card {
  height: 21.5rem;
  max-width: 16rem;
  @apply bg-white text-black overflow-hidden shadow-md;
}
.img {
  height: 16rem;
  width: 16rem;
}
</style>
