<template>
  <div v-for="album in userAlbums" :key="album.id">
    <router-link :to="{name: 'AlbumPhotos', params: {userId: album.userId, albumId: album.id}}"> Redirect </router-link>
      <div class="box-content h-50 w-50 p-4 border-2 rounded-lg hover:shadow-xl xl:transition-shadow ease-in-out
                bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed
                ">
        <span class="font-sans">{{ album.title }}</span>
      </div>
  </div>

</template>

<script>
export default {
  name: "Album",
  props: {
    userAlbums: {
      type: Array,
      required: true
    }
  },
}
</script>
<!--/*params: {albumId: album.id}}*/-->
<style scoped>

</style>