import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '@/api/authService'

const GreetingPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomePageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../views/LoginView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage, name: 'greeting' },
  { path: '/map', component: HomePage, name: 'homepage', meta: { requiresAuth: true } },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'registration', component: RegistrationPage, name: 'registration' },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const isAuthenticated = authService.isLoggedIn()
  console.log('🚀 ~ isAuthenticated:', isAuthenticated)
  const { name } = to

  if (isAuthenticated && authRoutes.includes(name)) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})
