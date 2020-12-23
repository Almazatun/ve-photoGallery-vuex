<template>
  <div v-for="album in userAlbums" :key="album.id">
    <div class="box-content h-50 w-50 p-4 border-2 rounded-lg hover:shadow-xl xl:transition-shadow ease-in-out
                bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed
                cursor-pointer
                " @click="goParticularAlbumPhoto(album.userId, album.id)">
      <span class="font-sans">{{ album.title }}</span>
    </div>
  </div>

</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Album",
  props: {
    userAlbums: {
      type: Array,
      required: true
    }
  },
  setup() {
    const router = useRouter()

    function goParticularAlbumPhoto(userId, albumId) {
      router.push({name: 'AlbumPhotos', params: {userId: userId, albumId: albumId}})
    }

    return {
      goParticularAlbumPhoto
    }
  }
}
</script>