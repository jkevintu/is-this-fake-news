<template>
  <div class="modal-backdrop">
    <div class="modal-wrapper">
      <!-- {{ questionResult }} -->
      <div class="result-title" :class="{ correct: isCorrect, incorrect: !isCorrect }">
        {{ getResult }}{{ getCorrectAnswer }}
      </div>
      <p class="p10">{{ questionResult?.question?.fact }}</p>
      <AButton :correct-type="true" @click="$emit('next')">下一題</AButton>
    </div>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'ModalQuestionResult',
  components: {
    AButton,
  },
  props: {
    questionResult: Object,
  },
  computed: {
    isCorrect() {
      return this.questionResult?.question?.correct_answer === this.questionResult.response
    },
    getResult() {
      if (this.isCorrect) {
        return '恭喜你答對了！'
      }
      return '答錯了，'
    },
    getCorrectAnswer() {
      if (this.questionResult?.correctAnswer) {
        return '這是真實消息！'
      }
      return '這是假消息！'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-backdrop {
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 800px;
  margin: 0 20px;
}
.result-title {
  font-size: 24px;
  padding: 15px 20px;
  border-radius: 10px;
  color: white;
  &.correct {
    background: #28a745;
  }
  &.incorrect {
    background: #dc3545;
  }
}
.p10 {
  padding: 10px;
}
</style>
