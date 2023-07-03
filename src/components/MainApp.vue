<template>
  <div class="game-wrapper">
    <div class="game-container">
      <!-- <div>Loading: {{ scene }}</div> -->
      <div class="step-container">
        <PageIntro v-if="isStep(0)" :loading="loading" @next="nextStep" />
        <PageTutorial v-if="isStep(1)" @next="nextStep" />
        <PageQuestion
          v-if="isStep(2)"
          :current-question="currentQuestion"
          :loading="loading"
          @chooseNewsTrue="answerNews(true)"
          @chooseNewsFalse="answerNews(false)"
        />
        <ModalQuestionResult
          v-if="showQuestionResult"
          :question-result="questionResult"
          @next="closeQuestionModalAndNextStep"
        />
        <PageResult
          v-if="isStep(3)"
          :scene="scene"
          :questions="questions"
          @restart="restartGame"
          @share="share"
          @reset="reset"
        />
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
      scene: {
        milliseconds: 0,
        interval: null,
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
  created() {
    this.scene.interval = setInterval(this.startSceneInterval, 100)
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
  beforeDestroy() {
    this.clearInterval()
  },
  methods: {
    async loadQuestions() {
      console.log(questionAPI)
      const questions = await questionAPI.getQuestions()
      console.log('questions', questions)
      // Filter empty question without id
      this.questions = questions.filter((q) => q.id)
      this.loading = false
    },
    nextStep() {
      this.step++
      this.scene.milliseconds = 0
    },
    nextQuestion() {
      this.questionIndex++
    },
    startSceneInterval() {
      this.scene.milliseconds = this.scene.milliseconds + 100
    },
    clearInterval() {
      clearInterval(this.scene.interval)
    },
    showAfter(second) {
      return second < this.scene.milliseconds / 1000
    },
    isStep(step) {
      return this.currentStep === step
    },
    async answerNews(response) {
      console.log('response', response)
      this.loading = true
      await questionAPI.postEvent({
        user_id: this.userId,
        question_id: this.currentQuestion?.id,
        event: 'response',
        response: response,
      })
      this.loading = false
      this.setShowQuestionResult(this.currentQuestion, response)
    },
    setShowQuestionResult(question, response) {
      this.setUserResponse(question, response)
      this.questionResult = {
        question,
        response,
      }
      this.showQuestionResult = true
    },
    setUserResponse(question, response) {
      question.response = response
    },
    closeQuestionModalAndNextStep() {
      this.showQuestionResult = false
      // DEBUG
      this.nextStep()
      return
      // DEBUG
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
    reset() {
      this.scene.milliseconds = 0
    },
    share(count) {
      // Share to social media: Facebook
      console.log('share', count)
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
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    max-height: calc(100% - 2em);
  }
}
.step-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
<style lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}

.p20 {
  padding: 20px;
}
.m20 {
  margin: 20px;
}
.mb10 {
  margin-bottom: 10px;
}
.w100 {
  width: 100%;
}
.animation {
  opacity: 0;
  transition: all 0.7s ease-in;
  &.show {
    opacity: 1;
  }
}
</style>