import {instance} from "@/utils/axios";

export const API = {
    getUsers() {
        return instance.get(`/users`).then(response => response.data)
    },
    getUserAlbums(userId){
        return instance.get(`/users/${userId}/albums`).then(response => response.data)
    },
    getAlbumPhotosOfUser(albumNumber){
        return instance.get(`/albums/${albumNumber}/photos`).then(response => response.data)
    }
}