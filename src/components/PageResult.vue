<template>
  <div class="page-container">
    <div class="result-container">
      <h1 class="animation" :class="{ show: showAfter(0) }">最後結果</h1>
      <div>
        <div class="animation result-text" :class="{ show: showAfter(1) }">你答對了 {{ correctCount }} 題</div>
        <div class="animation result-text" :class="{ show: showAfter(2.2) }">你的靈魂動物是 ...</div>
        <div class="animation result-text big" :class="{ show: showAfter(4) }">{{ spiritAnimal }}</div>
      </div>
      <!-- <div class="debug">{{ questions }}</div> -->
      <div>
        <AButton class="animation" :class="{ show: showAfter(5) }" @click="$emit('reset')">[DEBUG] reset</AButton>
        <AButton class="animation" :class="{ show: showAfter(5) }" @click="$emit('share', correctCount)"
          >分享結果</AButton
        >
      </div>
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
    spiritAnimal() {
      const correctCount = this.correctCount
      if (correctCount >= 8) {
        return '臺灣黑熊'
      } else if (correctCount >= 4) {
        return '臺灣梅花鹿'
      }
      return '櫻花鉤吻鮭'
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
<style scoped lang="scss">
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
.result-text {
  font-size: 24px;
  &.big {
    font-size: 48px;
  }
}
</style>
