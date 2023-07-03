<template>
  <div class="page-container">
    <h1>最後結果</h1>
    <AButton @click="$emit('restart')">Restart</AButton>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'PageResult',
  components: {
    AButton,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
