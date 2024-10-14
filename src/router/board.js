
import { isAuthenticated } from '@/util/guards';

export default [
  {
    path: '/board',
    name: 'board',
    component: () => import('../pages/board/BoardListPage.vue'),
  },
  {
    path: '/board/detail/:nno',
    name: 'board/detail',
    component: () => import('../pages/board/BoardDetailPage.vue'),
  },
  {
    path: '/board/create',
    name: 'board/create',
    component: () => import('../pages/board/BoardCreatePage.vue'),
    beforeEnter: isAuthenticated,
  },
  {
    path: '/board/update/:no',
    name: 'board/update',
    component: () => import('../pages/board/BoardUpdatePage.vue'),
    beforeEnter: isAuthenticated,
  },
];