export default [
  {
    path: '/:pathMatch(.*)*', // 모든 잘못된 경로에 대해
    name:"NotFound",
    component: () => import('../components/404NotFound.vue') // NotFound 컴포넌트 사용
  },
];

