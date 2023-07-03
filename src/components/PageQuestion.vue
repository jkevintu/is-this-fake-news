<template>
  <div class="page-container">
    <div class="question-container w100">
      <div class="w100">
        <h2>這是假消息嗎？</h2>
        <div class="news-title p20">{{ currentQuestion?.news_title }}</div>
        <div class="mb10 max-image-wrapper">
          <img :src="currentQuestion?.img_url" />
        </div>
      </div>
    </div>
    <!-- {{ currentQuestion }} -->
    <div class="answer-wrapper">
      <AButton :correct-type="true" :loading="loading" @buttonClick="$emit('chooseNewsTrue')">是真的吧</AButton>
      <AButton :incorrect-type="true" :loading="loading" @buttonClick="$emit('chooseNewsFalse')">是假消息</AButton>
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
    loading: Boolean,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.answer-wrapper {
  width: 100%;
  > .button-wrapper {
    margin: 10px 0;
  }
}
.max-image-wrapper {
  max-width: 100%;
  max-height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
