<template>
  <div class="modal-backdrop">
    <div class="modal-wrapper">
      <!-- {{ questionResult }} -->
      <div class="result-title" :class="{ correct: isCorrect, incorrect: !isCorrect }">
        {{ getResult }}{{ getCorrectAnswer }}
      </div>
      <div class="result-fact">
        <p class="p10">{{ questionResult?.question?.fact }}</p>
        <p class="p10">
          <span class="percentange">{{ percentageToText }}</span
          >的人也跟你一樣{{ getResultText }}
        </p>
      </div>
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
    percentageToText() {
      return `${parseInt(this.samePercentage.toFixed(2) * 100)}%`
    },
    samePercentage() {
      if (this.isCorrect) {
        return this.questionResult?.question?.answer_correct / this.questionResult?.question?.answer_total
      } else {
        return (
          (this.questionResult?.question?.answer_total - this.questionResult?.question?.answer_correct) /
          this.questionResult?.question?.answer_total
        )
      }
    },
    isCorrect() {
      return this.questionResult?.question?.correct_answer === this.questionResult.response
    },
    getResultText() {
      if (this.isCorrect) {
        return '答對了'
      }
      return '答錯了'
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

.result-fact {
  overflow-y: auto;
  font-size: 14px;
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
.percentange {
  font-weight: bold;
  font-size: 24px;
  margin-right: 5px;
}
.p10 {
  padding: 10px;
}
</style>
