<template>
  <div class="box-content h-80 w-50 p-4 border-2 rounded-lg hover:shadow-xl xl:transition-shadow ease-in-out
                cursor-pointer
"
       @click="goAlbumsOfUser(idUser)"
  >
    <div>
      <span>{{ userName }}</span>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "User",
  props: ['userName', 'idUser'],
  setup() {
    const router = useRouter()

    function goAlbumsOfUser(userId) {
      router.push({name: 'AlbumsOfUser', params: {userId: userId}})
    }

    return {
      goAlbumsOfUser
    }
  }
}
</script>