<template>
  <div class="box-content h-80 w-50 p-4 bg-center bg-cover rounded-2xl transition duration-150 ease-in-out mb-5"
       :style="{backgroundImage: `url(${photoUrl})`}"></div>
</template>

<script>
export default {
  name: "PhotoFrame",
  props: {
    photoUrl: {
      type: String,
      required: true
    },
    photoTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>