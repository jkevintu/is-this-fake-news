<template>
  <div class="modal-backdrop" @click="$emit('closeDetails')">
    <div class="modal-wrapper" @click.prevent="modalClick">
      <!-- {{ currentQuestion }} -->
      <p class="p10">{{ currentQuestion?.news_description }}</p>
      <AButton @click="$emit('closeDetails')">關閉</AButton>
    </div>
  </div>
</template>

<script>
import AButton from './AButton.vue'

export default {
  name: 'ModalExpand',
  components: {
    AButton,
  },
  props: {
    currentQuestion: Object,
  },
  methods: {
    modalClick(e) {
      e.stopPropagation()
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
.p10 {
  padding: 10px;
}
</style>
