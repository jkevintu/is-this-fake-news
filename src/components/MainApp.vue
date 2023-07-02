<template>
  <div class="game-container">
    {{ currentStep }}
    {{ showQuestionResult }}
    <div class="step-container">
      <PageIntro v-if="isStep(0)" @next="nextStep" />
      <PageTutorial v-if="isStep(1)" @next="nextStep" />
      <PageQuestion v-if="isStep(2)" @chooseNewsTrue="answerNews(true)" @chooseNewsFalse="answerNews(false)" />
      <ModalQuestionResult
        v-if="showQuestionResult"
        :question-result="questionResult"
        @next="closeQuestionModalAndNextStep"
      />
      <PageResult v-if="isStep(3)" />
    </div>
  </div>
</template>

<script>
import ModalQuestionResult from './ModalQuestionResult.vue'
import PageIntro from './PageIntro.vue'
import PageQuestion from './PageQuestion.vue'
import PageResult from './PageResult.vue'
import PageTutorial from './PageTutorial.vue'

const MAX_STEP = 3

export default {
  name: 'MainApp',
  components: {
    PageIntro,
    PageTutorial,
    PageQuestion,
    PageResult,
    ModalQuestionResult,
  },
  data() {
    return {
      step: 0,
      questionIndex: 0,
      questions: [],
      MAX_STEP: MAX_STEP,
      showQuestionResult: false,
      questionResult: {
        question: null,
        response: null,
      },
    }
  },
  computed: {
    currentStep() {
      return this.step
    },
    currentQuestion() {
      return this.questions?.[this.questionIndex]
    },
  },
  methods: {
    nextStep() {
      this.step++
    },
    isStep(step) {
      return this.currentStep === step
    },
    answerNews(response) {
      console.log('response', response)
      this.setShowQuestionResult(this.currentQuestion, response)
    },
    setShowQuestionResult(question, response) {
      this.questionResult = {
        question,
        response,
      }
      this.showQuestionResult = true
    },
    closeQuestionModalAndNextStep() {
      this.showQuestionResult = false
      this.nextStep()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
