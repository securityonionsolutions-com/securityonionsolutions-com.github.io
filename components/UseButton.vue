<template>
  <component :is="baseType()" :href="link" :target="external" @click="$emit('click')">
    <button
      class="shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none block"
      type="button"
      :class="[alternate ? 'w-64 bg-white text-black hover:bg-gray-100' : 'w-64 bg-so-blue text-white hover:bg-blue-700']"
    >
      <div class="mx-6">
        <slot>
          Button Text
        </slot>
      </div>
    </button>
  </component>
</template>

<script>
export default {
  props: {
    alternate: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    external () {
      if (this.link.startsWith('http') || this.link.startsWith('https')) {
        return '_blank'
      }
      return false
    }
  },
  methods: {
    baseType () {
      if (this.link !== '') {
        return 'a'
      } else {
        return 'div'
      }
    }
  }
}
</script>
