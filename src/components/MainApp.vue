<template>
  <div class="game-container">
    {{ currentStep }}
    <PageIntro v-if="isStep(0)" />
    <PageTutorial v-if="isStep(1)" />
    <PageQuestion v-if="isStep(2)" />
    <PageResult v-if="isStep(3)" />
    <div v-if="currentStep < MAX_STEP">
      <button @click="nextStep">Start</button>
    </div>

  </div>

</template>

<script>
import PageIntro from './PageIntro.vue'
import PageTutorial from './PageTutorial.vue'
import PageQuestion from './PageQuestion.vue'
import PageResult from './PageResult.vue'

const MAX_STEP = 3

export default {
  name: 'MainApp',
  components: {
    PageIntro,
    PageTutorial,
    PageQuestion,
    PageResult
},
  data () {
    return {
      step: 0,
      questionIndex: 0,
      questions: [],
      MAX_STEP: MAX_STEP
    }
  },
  methods: {
    nextStep () {
      this.step++
    },
    isStep(step) {
      return this.currentStep === step
    }
  },
  computed: {
    currentStep () {
      return this.step
    },
    currentQuestion () {
      return this.questions[this.questionIndex]
    }
  }
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
