<template>
  <div class="game-container">
    {{ currentStep }}
    <div class="step-container">
      <PageIntro v-if="isStep(0)" @next="nextStep" />
      <PageTutorial v-if="isStep(1)" @next="nextStep" />
      <PageQuestion v-if="isStep(2)" @chooseNewsTrue="chooseNews(true)" @chooseNewsFalse="chooseNews(false)" />
      <PageResult v-if="isStep(3)" />
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      step: 0,
      questionIndex: 0,
      questions: [],
      MAX_STEP: MAX_STEP,
    }
  },
  computed: {
    currentStep() {
      return this.step
    },
    currentQuestion() {
      return this.questions[this.questionIndex]
    },
  },
  methods: {
    nextStep() {
      this.step++
    },
    isStep(step) {
      return this.currentStep === step
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
