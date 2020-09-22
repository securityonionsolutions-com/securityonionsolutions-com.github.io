<template>
  <div class="flex flex-col items-center text-center">
    <slot name="graphic">
      <graphic class="graphic my-12" />
    </slot>
    <div class="flex flex-col items-center w-full">
      <header class="text-3xl xs:text-5xl font-bold mb-2">
        <slot name="header" />
      </header>
      <div class="text-lg xs:text-2xl w-4/5">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
import Graphic from '~/components/GraphicPlaceholder'

export default {
  components: {
    Graphic
  }
}
</script>

<style scoped>
.graphic {
  height: 400px;
  width: 800px;
}
</style>
