<template>
  <div class="herobase flex flex-row xs:-mx-12">
    <div class="flex flex-col w-full md:w-1/2 h-full items-center justify-center bg-white bg-opacity-90 md:bg-opacity-100 py-10 px-2 xs:px-8">
      <header class="text-3xl xl:text-5xl font-bold text-center pb-4">
        <slot name="header" />
      </header>
      <div class="text-lg xl:text-2xl">
        <slot name="body" />
      </div>
    </div>
    <div class="md:flex md:flex-col md:w-1/12 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent" />
  </div>
</template>

<style scoped>
.herobase {
  height: 400px;
}
</style>
