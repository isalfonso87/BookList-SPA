import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaLibrosView from '../views/ListaLibrosView.vue'
import DetalleLibroView from '../views/DetalleLibroView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/libros',
    name: 'libros',
    component: ListaLibrosView
  },
  {
    path: '/libros/:id',
    name: 'detalle-libro',
    component: DetalleLibroView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router