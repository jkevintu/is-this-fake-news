<template>
  <div class="page-container">
    <h1>遊戲教學</h1>
    <p class="tutorial-text p20">
      以下為十則新聞，請假消息偵查隊出動！若你覺得這個新聞的內容是正確且有根據的，請按綠色鍵「是真的吧」。若你覺的這個新聞為假消息，請按紅色鍵「是假消息」。遊戲結束後會依得分配對夥伴動物！
    </p>
    <AButton :correct-type="true" @click="$emit('next')">開始</AButton>
  </div>
</template>

 <script>
import AButton from './AButton.vue'

export default {
  name: 'PageTutorial',
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
.p20 {
  padding: 20px;
}
.tutorial-text {
  font-size: 20px;
}
</style>
