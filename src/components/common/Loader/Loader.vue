<template>
  <div :style="divStyle"> <img src="./Loader.svg" alt="loader"> </div>
</template>

<script>
export default {
  name: "Loader",
  computed: {
    divStyle() {
      return {
        position: 'absolute',
        height: '250px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }
  }
}
</script>

<style scoped>

</style>