import {API} from "@/api/ap1";
import {
    IS_FETCHING_DATA_FROM_SERVER,
    SET_PHOTOS_FROM_ALBUM_OF_USER,
    SET_USER_ALBUMS,
    SET_USERS
} from "@/utils/actions_mutation";

export const ACTIONS = {
    async getUsersJSON({commit}) {
        try {
            commit(IS_FETCHING_DATA_FROM_SERVER, true)
            const usersData = await API.getUsers()
            commit(SET_USERS, usersData)
            commit(IS_FETCHING_DATA_FROM_SERVER, false)
        } catch (error) {
            alert(error)
        }
    },
    async getUserAlbumsJSON({commit}, payload){
        try {
            commit(IS_FETCHING_DATA_FROM_SERVER, true)
            const userAlbums = await API.getUserAlbums(payload.userId)
            commit(SET_USER_ALBUMS, userAlbums)
            commit(IS_FETCHING_DATA_FROM_SERVER, false)
        } catch (error) {
            alert(error)
        }
    },
    async getAlbumPhotosOfUserJSON({commit}, payload){
        try {
            commit(IS_FETCHING_DATA_FROM_SERVER, true)
            const photos = await API.getAlbumPhotosOfUser(payload.albumId)
            commit(SET_PHOTOS_FROM_ALBUM_OF_USER, photos)
            commit(IS_FETCHING_DATA_FROM_SERVER, false)
        } catch (error) {
            alert(error)
        }
    }
}