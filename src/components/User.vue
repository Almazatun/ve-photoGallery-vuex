<template>
  <div class="box-content h-72 w-50 p-4 border-8 border-blue-200 rounded-2xl hover:shadow-2xl xl:transition-shadow ease-in-out
                cursor-pointer opacity-95 hover:opacity-100"
       :style="{'background-color': color}"
       @click="goAlbumsOfUser(idUser)">
    <div>
      <span class="font-bold">{{ userName }}</span>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "User",
  props: ['userName', 'idUser', 'color'],
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