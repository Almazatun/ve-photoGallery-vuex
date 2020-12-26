<template>
  <div v-for="album in userAlbums" :key="album.id">
    <div class="box-content h-60 w-50 p-4 border-2 rounded-2xl hover:shadow-2xl xl:transition-shadow ease-in-out
                bg-clip-padding p-6 bg-indigo-100 border-8 border-blue-200
                cursor-pointer hover:bg-indigo-300
                 p-4 text-left
                " @click="goParticularAlbumPhoto(album.userId, album.id)">
      <div class="flex flex-col">
        <span v-if="album.id < 10" class="text-7xl text-left font-bold border-b-8 border-pink-500 border-opacity-25">{{`0${album.id}`}}</span>
        <span v-else class="text-7xl text-left font-bold border-b-8 border-pink-500 border-opacity-25">{{album.id}}</span>
        <span class="font-bold mt-10">Album title: </span>
        <span class="font-medium lg:break-words md:break-words sm:break-all">{{ album.title }}</span>
      </div>
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