import {createStore} from 'vuex'
import {ACTIONS} from './actions/actions'
import {MUTATIONS} from "@/store/mutations/mutations";
import {GETTERS} from "@/store/getters/getters";

export default createStore({
    state: {
        colors: [
            {id: '1', color: '#f94144'},
            {id: '2', color: '#f3722c'},
            {id: '3', color: '#f8961e'},
            {id: '4', color: '#f9c74f'},
            {id: '5', color: '#90be6d'},
            {id: '6', color: '#43aa8b'},
            {id: '7', color: '#577590'},
            {id: '8', color: "#355070"},
            {id: '9', color: "#6d597a"},
            {id: '10', color: "#b56576"},
        ],
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
