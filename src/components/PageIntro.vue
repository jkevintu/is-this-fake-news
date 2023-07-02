<template>
  <div class="page-container">
    <h1>這是假消息嗎？</h1>
    <AButton @click="$emit('next')">Next</AButton>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'PageIntro',
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
