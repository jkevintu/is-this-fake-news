<template>
  <div class="question-container">
     {{ currentQuestion }}
    <div class="answer-wrapper">
    <AButton @click="$emit('chooseNewsTrue')" :buttonType="true">正確</AButton>
    <AButton @click="$emit('chooseNewsFalse')" :buttonType="false">錯誤</AButton>
    </div>
   </div>

 </template>

 <script>
import AButton from './AButton.vue'
 export default {
  name: 'PageQuestion',
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
