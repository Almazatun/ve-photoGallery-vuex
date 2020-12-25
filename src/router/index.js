import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Albums from "@/views/Albums";
import Photos from "@/views/Photos";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId/albums',
    name: 'AlbumsOfUser',
    component: Albums,
  },
  {
    path: '/user/:userId/album/:albumId',
    name: 'AlbumPhotos',
    component: Photos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
