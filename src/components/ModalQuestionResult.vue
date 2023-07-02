<template>
  <div class="modal-backdrop">
    <div class="modal-wrapper">
      {{ questionResult }}
      <h3>{{ getResult }}{{ getCorrectAnswer }}</h3>
      <p class="p20">{{ questionResult?.question?.fact }}</p>
      <AButton @click="$emit('next')">Next</AButton>
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
    getResult() {
      if (this.questionResult?.question?.correct_answer === this.questionResult.response) {
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
<style scoped>
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
}
.p20 {
  padding: 20px;
}
</style>
