<template>
  <div class="container grid grid-cols-5 gap-4 mx-auto my-10 min-h-3/4">
    <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Albums</h2>
    <Album :user-albums="albums"/>
  </div>
</template>

<script>
import { onMounted} from 'vue'
import Album from "@/components/Album";
import {mapGetters, useStore} from "vuex";
import {useRoute} from "vue-router";
export default {
  name: "Albums",
  components: {
    Album: Album
  },
  setup(){
    const store = useStore();
    const { params: { userId } } = useRoute()

    onMounted(() => {
      console.log("OnMounted")
      store.dispatch({
        type: 'getUserAlbumsJSON',
        userId: userId
      })
    })
  },
  computed: {
    ...mapGetters({
      albums:  'userAlbums',
    })
  },
}
</script>

<style scoped>

</style>