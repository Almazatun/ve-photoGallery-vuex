import {API} from "@/api/ap1";
import {SET_PHOTOS_FROM_ALBUM_OF_USER, SET_USER_ALBUMS, SET_USERS} from "@/utils/actions_mutation";

export const ACTIONS = {
    async getUsersJSON({commit}) {
        try {
            //loader true
            const usersData = await API.getUsers()
            commit(SET_USERS, usersData)
            //loader false
        } catch (error) {
            alert(error)
        }
    },
    async getUserAlbumsJSON({commit}, payload){
        try {
            //loader true
            const userAlbums = await API.getUserAlbums(payload.userId)
            commit(SET_USER_ALBUMS, userAlbums)
            //loader false
        } catch (error) {
            alert(error)
        }
    },
    async getAlbumPhotosOfUserJSON({commit}, payload){
        try {
            //loader true
            const photos = await API.getAlbumPhotosOfUser(payload.albumId)
            commit(SET_PHOTOS_FROM_ALBUM_OF_USER, photos)
            //loader false
        } catch (error) {
            alert(error)
        }
    }
}