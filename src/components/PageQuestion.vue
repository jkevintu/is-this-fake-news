<template>
  <div class="page-container">
    <div>
      <h2>這是假新聞嗎？</h2>
      <h3>{{ currentQuestion?.news_title }}</h3>
      <image :src="currentQuestion?.img_url"></image>
    </div>
    <!-- {{ currentQuestion }} -->
    <div class="answer-wrapper">
      <AButton :button-type="true" @click="$emit('chooseNewsTrue')">正確</AButton>
      <AButton :button-type="false" @click="$emit('chooseNewsFalse')">錯誤</AButton>
    </div>
  </div>
</template>

 <script>
import AButton from './AButton.vue'

export default {
  name: 'PageQuestion',
  components: {
    AButton,
  },

  props: {
    currentQuestion: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
