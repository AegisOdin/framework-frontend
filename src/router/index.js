import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MailView from '../views/MailView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/mail', name: 'Mail', component: MailView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router