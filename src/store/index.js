import { createStore } from 'vuex'
import {ACTIONS} from './actions/actions'
import {MUTATIONS} from "@/store/mutations/mutations";
import {GETTERS} from "@/store/getters/getters";

export default createStore({
  state: {
    users: [],
    userAlbums: [],
    userAlbumPhotos: [],
    isFetching: false
  },
  mutations: MUTATIONS,
  actions: ACTIONS,
  getters: GETTERS,
  modules: {}
})
