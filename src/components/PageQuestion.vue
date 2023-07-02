<template>
  <div class="page-container">
    <div>
      <h2>這是假消息嗎？</h2>
      <h3 class="p20">{{ currentQuestion?.news_title }}</h3>
      <image :src="currentQuestion?.img_url"></image>
    </div>
    <!-- {{ currentQuestion }} -->
    <div class="answer-wrapper">
      <AButton :correct-type="true" @click="$emit('chooseNewsTrue')">是真的吧</AButton>
      <AButton :incorrect-type="true" @click="$emit('chooseNewsFalse')">是假消息</AButton>
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
<style>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p20 {
  padding: 20px;
}
.answer-wrapper {
  > div:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
