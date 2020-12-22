<template>
  <div class="bg-blue-100 bg-opacity-10 h-screen min-h-screen" v-if="!isFetch">
    <Routes/>
    <router-view/>
  </div>
  <div v-else>
    <Loader/>
  </div>
</template>

<script>
import Routes from "@/components/Routes";
import {useStore} from "vuex";
import Loader from "@/components/common/Loader/Loader";
import {ref} from 'vue'

export default {
  components: {
    Routes: Routes,
    Loader: Loader
  },
  setup() {
    const store = useStore()
    const isFetch = ref(store.getters.isFetch)
    console.log(isFetch)

    return {
      isFetch
    }
  }
}
</script>