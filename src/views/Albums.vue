<template>
  <div v-if="isFetching">
    <Loader/>
  </div>
  <div style="margin: auto" class="container flex flex-col align-middle justify-center text-center" v-else>
    <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold
                font-sans text-4xl mt-5">Photo albums</h2>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-12 gap-4 mx-auto my-10 min-h-3/4">
      <Album :user-albums="albums"/>
    </div>
    <div>
      <button @click="goBack()" class="font-sans font-bold hover:bg ease-in-out h-16 w-20 bg-green-500 rounded">Home
      </button>
    </div>
  </div>
</template>

<script>
import {onMounted} from 'vue'
import Album from "@/components/Album";
import {mapGetters, useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import Loader from "@/components/common/Loader/Loader";

export default {
  name: "Albums",
  components: {
    Loader : Loader,
    Album: Album
  },
  setup() {
    const store = useStore();
    const router = useRouter()
    const {params: {userId}} = useRoute()

    function goBack() {
      router.push({name: 'Home'})
    }

    onMounted(() => {
      store.dispatch({
        type: 'getUserAlbumsJSON',
        userId: userId
      })
    })

    return {
      goBack
    }
  },
  computed: {
    ...mapGetters({
      albums: 'userAlbums',
      isFetching: 'isFetch'
    })
  },
}
</script>