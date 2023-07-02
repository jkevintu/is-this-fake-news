<template>
  <div class="question-container">
    <h1>假消息教學</h1>
    <AButton @click="$emit('next')">Next</AButton>
   </div>

 </template>

 <script>
import AButton from './AButton.vue'
 export default {
  name: 'PageTutorial',
  components: {
    AButton
  },
  props: {
    currentQuestion: Object
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
