<template>
  <div id="nav" class="flex justify-center text-green-800 text-5xl font-bold ">
    <router-link to="/">Home</router-link> |
    <router-link to="/about"> About</router-link>
  </div>
</template>

<script>
export default {
  name: "Routes"
}
</script>

<style>
#nav a.router-link-exact-active {
  color: hotpink;
}
</style>