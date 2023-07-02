<template>
  <div
    class="button-wrapper"
    :class="{ 'correct-type': correctType, 'incorrect-type': incorrectType, loading: loading }"
    @click="emitClick"
  >
    <slot></slot>
    <span v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    correctType: {
      type: Boolean,
      default: false,
    },
    incorrectType: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      if (this.loading) {
        return
      }
      this.$emit('buttonClick')
    },
  },
}
</script>

<style scoped>
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border: 1px solid #42b983;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &.correct-type {
    background-color: #42b983;
    color: #fff;
  }
  &.incorrect-type {
    background-color: #b33434;
    border: 1px solid #b33434;
    color: white;
  }
  &:hover {
    opacity: 0.8;
  }
  &.loading {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
