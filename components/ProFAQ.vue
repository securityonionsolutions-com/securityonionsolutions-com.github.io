<template>
  <div class="text-left" v-for="(item, index) in faqList" :key="index">
    <b>{{ item.question }}</b><br><br>
    <span v-if="index !== faqList.length - 1">
      {{ item.answer }}<br><br>
    </span>
    <span v-else>
      {{ item.answer }}
    </span>
  </div>
</template>

<script>
import faqs from '~/content/pro_faq.json'

export default {
  data() {
    return {
      faqList: faqs.faq
    };
  }
}
</script>

<style>
.text-left {
  text-align: left;
}
</style>