<template>
  <div class="container grid grid-cols-5 gap-4 mx-auto my-10 min-h-3/4">
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
      users:  'users',
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
  created(){
    this.getUsers()
    console.log('render')
  }
}
</script>
