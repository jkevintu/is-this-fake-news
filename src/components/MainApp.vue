<template>
  <div class="game-wrapper">
    <div class="game-container">
      <!-- <div>Loading: {{ loading }}</div> -->
      <div class="step-container">
        <PageIntro v-if="isStep(0)" @next="nextStep" />
        <PageTutorial v-if="isStep(1)" @next="nextStep" />
        <PageQuestion
          v-if="isStep(2)"
          :current-question="currentQuestion"
          @chooseNewsTrue="answerNews(true)"
          @chooseNewsFalse="answerNews(false)"
        />
        <ModalQuestionResult
          v-if="showQuestionResult"
          :question-result="questionResult"
          @next="closeQuestionModalAndNextStep"
        />
        <PageResult v-if="isStep(3)" @restart="restartGame" />
      </div>
    </div>
  </div>
</template>

<script>
import questionAPI from '../api/questions'
import { generateUUID } from '../utils/common'
import Cookies from '../utils/cookies'

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
      userId: generateUUID(),
      step: 0,
      questionIndex: 0,
      questions: [],
      MAX_STEP: MAX_STEP,
      showQuestionResult: false,
      questionResult: {
        question: null,
        response: null,
      },
      loading: false,
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
  created() {
    // Cookie
    if (Cookies.get('user_id') !== null) {
      this.userId = Cookies.get('user_id')
    } else {
      Cookies.set('user_id', this.userId)
    }
    // Load questions
    this.loading = true
    this.loadQuestions()
  },
  methods: {
    async loadQuestions() {
      console.log(questionAPI)
      const questions = await questionAPI.getQuestions()
      console.log('questions', questions)
      this.questions = questions
      this.loading = false
    },
    nextStep() {
      this.step++
    },
    nextQuestion() {
      this.questionIndex++
    },
    isStep(step) {
      return this.currentStep === step
    },
    async answerNews(response) {
      console.log('response', response)
      await questionAPI.postEvent({
        user_id: this.userId,
        question_id: this.currentQuestion?.id,
        event: 'response',
        response: response,
      })
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
      if (this.questionIndex === this.questions.length - 1) {
        this.nextStep()
        return
      }
      this.nextQuestion()
    },
    restartGame() {
      this.step = 0
      this.questionIndex = 0
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #b3b3b3;
  justify-content: center;
  align-items: center;
}
.game-container {
  width: 100%;
  max-width: 800px;
  min-height: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
