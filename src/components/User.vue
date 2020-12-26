<template>
  <div class="box-content h-72 w-50 p-4 border-8 border-blue-200 rounded-2xl hover:shadow-2xl xl:transition-shadow ease-in-out
                cursor-pointer opacity-95 hover:opacity-100"
       :style="{'background-color': color}"
       @click="goAlbumsOfUser(idUser)">
    <div class="flex flex-row justify-start h-40 w-auto">
      <div class="mr-4">
        <img class="rounded-full" style="height: 40px; width: 40px" src="https://p.kindpng.com/picc/s/10-104902_simple-user-icon-user-icon-white-png-transparent.png" alt="">
      </div>
      <div class="flex flex-col text-left">
        <span class="font-bold">Name</span>
        <span class="font-sans font-light">{{ userName }}</span>
      </div>

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