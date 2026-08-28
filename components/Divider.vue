<template>
  <div class="flex-none relative mx-24 sm:mx-56 xl:mx-64 my-10 h-10">
    <img src="~assets/img/icons/so-onion.svg" class="bg-white -ml-5 -mt-10 circle px-1">
    <hr class="hidden xs:block">
    <!-- <div class="rounded-full h-4 w-4 bg-white -mt-2 border-4 border-black circle" /> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="postcss">
@reference "../assets/css/tailwind.css";
.circle {
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  margin-left: -18px;
  margin-top: -40px;
  /* margin-right: 24rem;
  margin-right: 24rem; */
  @apply bg-white px-1;
}

hr {
  border-top: 2px solid black;
  border-radius: 2px;
}
</style>
