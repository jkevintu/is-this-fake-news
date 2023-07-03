<template>
  <div class="page-container">
    <div class="result-container">
      <h1 class="animation" :class="{ show: showAfter(0) }">最後結果</h1>
      <div class="animation" :class="{ show: showAfter(1) }">你答對了 {{ correctCount }} 題</div>
      <!-- <div class="debug">{{ questions }}</div> -->
      <AButton class="animation" :class="{ show: showAfter(3) }" @click="$emit('share', correctCount)"
        >分享結果</AButton
      >
    </div>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'PageResult',
  components: {
    AButton,
  },
  props: {
    scene: {
      type: Object,
      default: () => ({
        milliseconds: 0,
        interval: null,
      }),
    },
    questions: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    correctCount() {
      return this.questions.filter((q) => q.correct_answer === q.response).length
    },
  },
  methods: {
    showAfter(second) {
      return second < this.scene.milliseconds / 1000
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.debug {
  overflow-y: auto;
  line-break: anywhere;
}
.result-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
</style>
