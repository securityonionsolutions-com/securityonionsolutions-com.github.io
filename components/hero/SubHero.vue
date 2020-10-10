<template>
  <div class="herobase flex flex-row xs:-mx-12">
    <div class="flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-75 md:bg-opacity-100 pt-16 xs:px-8">
      <header class="text-3xl xl:text-5xl font-bold text-center">
        <slot name="header" />
      </header>
      <div class="text-lg xl:text-2xl">
        <slot name="body" />
      </div>
    </div>
    <div class="md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white" />
  </div>
</template>

<style scoped>
.herobase {
  height: 400px;
}
</style>
