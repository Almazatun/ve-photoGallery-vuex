<template>
  <router-link :to="{name: 'AlbumsOfUser', params: {userId: idUser}}">
    <div class="box-content h-80 w-50 p-4 border-2 rounded-lg hover:shadow-xl xl:transition-shadow ease-in-out">
      <div>
        <span>{{ userName }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "User",
  props: ['userName', 'idUser'],
}
</script>