<template>
  <div class="flex flex-col items-center">
    <div
      class="shadow-sm border font-bold p-4 xs:p-6 xl:py-4 xl:px-4 rounded-xl m-1 relative mx-2 lg:mx-12"
      :class="[alt ? 'bg-white text-black' : 'bg-so-blue text-white']"
    >
      <div class="mx-4 text-sm xs:text-base">
        <slot name="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.
        </slot>
      </div>
      <!-- <div v-if="showName" class="absolute name text-black">
        <slot name="name">
          Firstname Lastname
        </slot>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.name {
  right: -2%;
  bottom: -40%;
}
/* .rounded-xl {
  border-radius: 2rem;
} */
</style>
