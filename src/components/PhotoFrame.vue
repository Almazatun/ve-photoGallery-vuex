<template>
  <div v-for="photo in photos" :key="photo.id">
    <span>{{ photo.title }}</span>
  </div>
</template>

<script>
export default {
  name: "PhotoFrame",
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>