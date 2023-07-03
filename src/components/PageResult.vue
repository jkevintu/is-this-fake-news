<template>
  <div class="page-container">
    <div class="result-container">
      <div>
        <h1 class="animation" :class="{ show: showAfter(0) }">最後結果</h1>
      </div>
      <div class="result-wrapper">
        <div class="animation result-text" :class="{ show: showAfter(1) }">你答對了 {{ correctCount }} 題</div>
        <div class="animation result-text" :class="{ show: showAfter(2.2) }">你的靈魂動物是 ...</div>
        <div class="result-reveal animation" :class="{ show: showAfter(4) }">
          <div class="result-text big">{{ spiritAnimal }}</div>
          <div class="result-image">
            <img :src="spiritAnimalImg" />
          </div>
        </div>
      </div>
      <!-- <div class="debug">{{ questions }}</div> -->
      <div class="actions-wrapper">
        <!-- <AButton class="animation" :class="{ show: showAfter(5) }" @click="$emit('reset')">[DEBUG] reset</AButton> -->
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
      // return 8 // DEBUG
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
    spiritAnimalImg() {
      const correctCount = this.correctCount
      if (correctCount >= 8) {
        return 'https://i.imgur.com/pwNShrA.jpg'
      } else if (correctCount >= 4) {
        return 'https://i.imgur.com/AYImZx9.png'
      }
      return 'https://i.imgur.com/rVMVlIz.png'
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
    font-weight: bold;
  }
}

.result-image {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 0 1;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 400px;
  }
}
.result-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  .result-reveal {
    margin-top: 4em;
  }
}
</style>
