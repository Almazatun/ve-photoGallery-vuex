<template>
  <div class="bg-blue-100 bg-opacity-10 h-screen min-h-screen">
    <Routes/>
    <router-view/>
  </div>
</template>

<script>
import Routes from "@/components/Routes";

export default {
  components: {
    Routes: Routes,
  }
}
</script>