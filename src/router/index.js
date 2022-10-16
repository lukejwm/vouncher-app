import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import { h, resolveComponent } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/projects',
        name: 'Projects',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '/projects/project-one',
            name: 'Project One',
            component: () => import('@/views/projects/ProjectOne.vue'),
          },
          {
            path: '/projects/project-two',
            name: 'Project Two',
            component: () => import('@/views/projects/ProjectTwo.vue'),
          },
          {
            path: '/projects/project-three',
            name: 'Project Three',
            component: () => import('@/views/projects/ProjectThree.vue'),
          },
          {
            path: '/projects/project-four',
            name: 'Project Four',
            component: () => import('@/views/projects/ProjectFour.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
