<template>
  <div>
    <span>Photos</span>
    <span>{{`Album: ${albumId}`}}</span>
    <div >
      <PhotoFrame :photos="photos"/>
    </div>
  </div>
</template>

<script>
import PhotoFrame from "@/components/PhotoFrame";
import {mapGetters} from "vuex";
import {useRoute} from "vue-router";

export default {
  name: "Photos",
  components: {
    PhotoFrame: PhotoFrame
  },

  setup(){
    const { params: { albumId } } = useRoute()

    return {
      albumId
    }
  },

  methods: {
    getPhotos() {
      this.$store.dispatch({
        type: 'getAlbumPhotosOfUserJSON',
        albumId: this.albumId
      });
    },
  },
  created(){
    this.getPhotos()
  },
  computed: {
    ...mapGetters({
      photos:  'userAlbumPhotos',
    })
  },
}
</script>