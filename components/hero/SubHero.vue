<template>
  <div class="herobase flex flex-col items-center text-center">
    <div class="flex flex-col items-center w-full">
      <header class="text-3xl xs:text-5xl font-bold mb-2 mt-10">
        <slot name="header" />
      </header>
      <div class="text-lg xs:text-2xl w-4/5">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.herobase {
  height: 400px;
}
</style>
