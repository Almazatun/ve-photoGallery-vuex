import {SET_PHOTOS_FROM_ALBUM_OF_USER, SET_USER_ALBUMS, SET_USERS} from "@/utils/actions_mutation";

export const MUTATIONS = {
    [SET_USERS](state, payload) {
        state.users = payload
    },
    [SET_USER_ALBUMS](state, payload) {
        state.userAlbums = payload
    },
    [SET_PHOTOS_FROM_ALBUM_OF_USER](state, payload){
        state.userAlbumPhotos = payload
    }
}