export const GETTERS = {
    isFetch(state){
        return state.isFetching
    },
    users(state) {
        return state.users
    },
    userAlbums(state){
        return state.userAlbums
    },
    userAlbumPhotos (state){
        return state.userAlbumPhotos
    }

}