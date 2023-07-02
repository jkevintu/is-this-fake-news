<template>
  <div class="button-wrapper" >
    <slot />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    text: String,
    buttonType: Boolean
  },
  methods: {
    isType(type) {
      console.log(type, this.buttonType)
      if (type === true) return true
      if (type === false) return false
      return null
    }
  }

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
  &.true-type {
    background-color: #42b983;
    color: #fff;
  }
  &.false-type {
    background-color: #b33434;
    color: white;
  }
}
</style>
