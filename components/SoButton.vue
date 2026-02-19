<template>
  <component :is="baseType()" :href="link" :target="external" @click="$emit('click')">
    <button
      class="shadow-lg font-bold py-3 px-4 xs:px-6 rounded-full focus:outline-none block cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md"
      type="button"
      :class="[alternate ? 'bg-white text-black hover:bg-gray-100' : 'bg-so-blue text-white hover:bg-blue-600']"
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
      return '_self'
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
