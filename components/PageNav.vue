<template>
  <div class="xs:-mx-12">
    <div class="w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100">
      <div class="text-md xs:text-xl font-light pb-1">
        {{ pageName }}
        <noscript>
          Test
        </noscript>
      </div>
      <div class="flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base">
        <div v-for="(link, index) in links" :key="link.name" class="flex flex-row">
          <a :href="`#${link.id}`" class="px-2 hover:text-gray-700">
            {{ link.name }}
          </a>
          <div v-if="index!==links.length-1" class="xs:px-1">
            &bull;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: ''
    },
    links: {
      type: Array,
      default: () => { return [{ name: '', id: '' }] }
    }
  }
}
</script>

<style>
.nav-style {
  border-bottom: 1px solid lightgray;
}
</style>
