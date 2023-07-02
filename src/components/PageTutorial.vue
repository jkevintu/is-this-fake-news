<template>
  <div class="page-container">
    <h1>假消息教學</h1>
    <p class="p20">
      教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學教學
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
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p20 {
  padding: 20px;
}
</style>
