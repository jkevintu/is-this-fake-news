<template>
  <div class="button-wrapper">
    <div
      class="button"
      :class="{ 'correct-type': correctType, 'incorrect-type': incorrectType, loading: loading }"
      @click="emitClick"
    >
      <slot></slot>
      <span v-if="text">{{ text }}</span>
    </div>
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

<style scoped lang="scss">
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 10px;
  line-height: 4em;
  font-size: 16px;
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
