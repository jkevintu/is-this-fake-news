<template>
  <div class="page-container page-intro">
    <h1>這是假消息嗎？</h1>
    <AButton :loading="loading" :correct-type="true" @buttonClick="$emit('next')">
      {{ loading ? 'Loading...' : '開始遊戲' }}
    </AButton>
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
    loading: Boolean,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container.page-intro {
  justify-content: center;
}
</style>
