<template>
  <div class="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto my-10 justify-center align-middle min-h-3/4
    lg:p-0 md:p-1.5 sm:p-10 p-12
    ">
    <div v-for="user in users" :key="user.id">
      <User :user-name="user.name" :id-user="user.id" :color="user.color"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import User from "@/components/User";

export default {
  name: 'Home',
  components: {
    User: User
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      users: 'users',
      colors: 'colors'
    })
  },
  methods: {
    getUsers() {
      this.$store.dispatch({
        type: 'getUsersJSON',
        arrColors: this.colors
      });
    },
  },
  created() {
    this.getUsers()
  }
}
</script>
