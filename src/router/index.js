import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Albums from "@/views/Albums";
import Photos from "@/views/Photos";
import NotFound from "@/views/NotFound";

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
    path: '/user/:userId/albums/:albumId',
    name: 'AlbumPhotos',
    component: Photos
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
