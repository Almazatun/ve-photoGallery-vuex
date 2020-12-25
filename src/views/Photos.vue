<template>
  <div v-if="isFetching">
    <Loader/>
  </div>
  <div class="container flex flex-col hover:opacity-100" style="margin: auto" v-else>
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold
                font-sans text-4xl mt-5 text-center">Photos</span>
    <div class="ml-2.5">
      <button @click="goBackPreviousPage()"
              class="font-sans font-bold hover:bg ease-in-out h-20 w-20 bg-gray-100 rounded text-center">
        <img class="inline-block align-middle"
             height="35"
             width="35"
             src="https://image.flaticon.com/icons/png/128/271/271220.png"
             alt="arrow icon">
      </button>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-12 gap-4 mx-auto my-10 min-h-3/4">
      <div v-for="photo in photos" :key="photo.id">
        <PhotoFrame :photo-title="photo.title" :photo-url="photo.url"/>
        <div class="ml-4">
          <span class="font-bold">Photo title: </span>
          <br>
          <span class="break-words font-sans text-left"> {{ photo.title }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoFrame from "@/components/PhotoFrame";
import {mapGetters} from "vuex";
import {useRoute, useRouter} from "vue-router";
import Loader from "@/components/common/Loader/Loader";

export default {
  name: "Photos",
  components: {
    Loader: Loader,
    PhotoFrame: PhotoFrame
  },

  setup() {
    const {params: {albumId}} = useRoute()
    const {params: {userId}} = useRoute()
    const router = useRouter()

    function goBackPreviousPage() {
      router.push({name: 'AlbumsOfUser', params: {userId: userId}})
    }

    return {
      albumId,
      goBackPreviousPage
    }
  },

  methods: {
    getPhotos() {
      this.$store.dispatch({
        type: 'getAlbumPhotosOfUserJSON',
        albumId: this.albumId
      });
    },
  },
  created() {
    this.getPhotos()
  },
  computed: {
    ...mapGetters({
      photos: 'userAlbumPhotos',
      isFetching: 'isFetch'
    })
  },
}
</script>